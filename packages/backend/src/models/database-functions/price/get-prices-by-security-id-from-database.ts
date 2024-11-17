import { PriceType, SecurityType } from "types/data-types";
import prisma from "models/prisma/prisma";

type SecurityWithoutPricesType = Omit<SecurityType, "prices">;

const getPricesBySecurityIdFromDatabase = async (
  targetSecurityId: number
): Promise<{ security: SecurityWithoutPricesType; prices: PriceType[] }> => {
  try {
    const securityWithPrices = await prisma.security.findUnique({
      where: {
        id: targetSecurityId,
        deletedAt: null,
      },
      select: {
        id: true,
        ticker: true,
        securityName: true,
        sector: true,
        country: true,
        trend: true,
        prices: true, 
      },
    });

    if (!securityWithPrices) {
      throw new Error(`Security with id: ${targetSecurityId} does not exist`);
    }

    const { prices, ...security } = securityWithPrices;
    const parsedPrices: PriceType[] = prices.map((price) => ({
      ...price,
      close: price.close.toNumber(),
    }));

    return { security, prices: parsedPrices };
  } catch (error) {
    console.error(`Error retrieving prices by security id: ${error}`);
    throw error;
  }
};

export default getPricesBySecurityIdFromDatabase;
