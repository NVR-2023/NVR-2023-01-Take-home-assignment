import prisma from "models/prisma/prisma";

const getAllSecuritiesFromDatabase = async () => {
  try {
    const result = await prisma.security.findMany();
    return result;
  } catch (error) {
    console.error(`Error getting all securities from database: ${error} `);
    throw new Error(`Error getting all securities from database: ${error} `);
  }
};

export default getAllSecuritiesFromDatabase;
