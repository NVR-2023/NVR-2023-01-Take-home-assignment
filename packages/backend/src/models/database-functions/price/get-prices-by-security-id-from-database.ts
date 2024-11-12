import { PriceType } from "types/data-types";
import prisma from "models/prisma/prisma";

const getPricesBySecurityIdFromDatabase = async (
  targetSecurityId: number
): Promise<PriceType[]> => {
  try {
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
    throw new Error(`Error retrieving prices by security id: ${error}`);
  }
};

export default getPricesBySecurityIdFromDatabase;
