import prisma from "models/prisma/prisma";
const checkIfSecurityTableIsEmpty = async (): Promise<boolean> => {
  try {
    const result = await prisma.security.findFirst();
    return !result;
  } catch (error) {
    console.error(`Error checking if Securities table is empty: ${error}`);
    throw new Error(`Error checking if Securities table is empty: ${error}`);
  }
};

export default checkIfSecurityTableIsEmpty;
