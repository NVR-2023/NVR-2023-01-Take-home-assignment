import prisma from "models/prisma/prisma";


const getAllSecuritiesFromDatabase = async () => {
  console.log("Function GET ALL entered");

  try {
    console.log("Function GET ALL entered - inside block");
    const result = await prisma.security.findMany();
    return result;
    console.log("*** RESULt ***");
    console.log(result);
    if (!result) {
      console.log("empty array");
    }
  } catch (error) {
    console.error(`Error getting all securities from database: ${error} `);
    throw new Error(`Error getting all securities from database: ${error} `);
  }
};

export default getAllSecuritiesFromDatabase