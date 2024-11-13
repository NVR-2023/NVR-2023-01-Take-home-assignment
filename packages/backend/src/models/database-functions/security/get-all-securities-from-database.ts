import prisma from "models/prisma/prisma";

const getAllSecuritiesFromDatabase = async () => {
  try {
    const result = await prisma.security.findMany({
      select: {
        id: true,
        ticker: true,
        securityName: true,
        sector: true,
        country: true,
        trend: true,
      },
      where: {
        deletedAt: null,
      },
    });
    return result;
  } catch (error) {
    console.error(`Error getting all securities from database: ${error} `);
    throw new Error(`Error getting all securities from database: ${error} `);
  }
};

export default getAllSecuritiesFromDatabase;
