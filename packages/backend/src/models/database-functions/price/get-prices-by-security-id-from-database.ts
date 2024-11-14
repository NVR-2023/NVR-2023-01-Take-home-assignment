import { PriceType } from "types/data-types";
import prisma from "models/prisma/prisma";

const getPricesBySecurityIdFromDatabase = async (
  targetSecurityId: number
): Promise<PriceType[]> => {
  try {
    const isSoftDeleted = Boolean(
      (
        await prisma.security.findUnique({
          where: { id: targetSecurityId },
        })
      )?.deletedAt
    );

    if (isSoftDeleted) {
      throw new Error(`Security with id: ${targetSecurityId} is deleted`);
    }

    const result = await prisma.price.findMany({
      where: {
        securityId: targetSecurityId,
      },
    });
    if (result.length === 0) {
      throw new Error(`No prices found for securityId: ${targetSecurityId}`);
    }
    const parsedResult: PriceType[] = result.map((price) => ({
      ...price,
      close: price.close.toNumber(),
    }));

    return parsedResult;
  } catch (error) {
    console.error(`Error retrieving prices by security id: ${error}`);
    throw error;
  }
};

export default getPricesBySecurityIdFromDatabase;
