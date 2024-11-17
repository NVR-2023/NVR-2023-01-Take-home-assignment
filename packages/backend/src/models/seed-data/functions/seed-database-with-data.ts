import prisma from "models/prisma/prisma";
import createDataModelsFromJson from "./create-data-models-from-json";
import checkIfSecurityTableIsEmpty from "./check-if-security-table-is-empty";

const seedDatabaseWithData = async () => {
  console.log("Starting seeding process...");

  try {
    const isSecurityTableEmpty = await checkIfSecurityTableIsEmpty();
    if (!isSecurityTableEmpty) {
      console.log("Security table already populated");
      return false;
    }

    const securities = createDataModelsFromJson();

    for (const security of securities) {
      const currentSecurity = await prisma.security.create({
        data: {
          ticker: security.ticker,
          securityName: security.securityName,
          sector: security.sector,
          country: security.country,
          trend: security.trend,
        },
      });

      const priceData = security.prices.map((price) => ({
        securityId: currentSecurity.id,
        date: price.date,
        close: price.close,
        volume: price.volume,
      }));

      await prisma.price.createMany({ data: priceData });
    }

    console.log("Database successfully seeded");
    return true;
  } catch (error) {
    console.error(`Error seeding the database: ${error}`);
    throw new Error(`Error seeding the database: ${error}`);
  }
};

export default seedDatabaseWithData;
