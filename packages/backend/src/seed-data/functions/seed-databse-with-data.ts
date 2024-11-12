import { SecurityType } from "types/data-types";
import createDataModelsFromJson from "./create-data-models-from-json";
import checkIfSecurityTableIsEmpty from "./check-if-security-table-is-empty";

const seedDatabaseWithData = async () => {
  try {
    const isSecurityTableEmpty: boolean = await checkIfSecurityTableIsEmpty();
    if (!isSecurityTableEmpty) {
      console.log("Security table already populated");
      return false;
    }
    const data: SecurityType[] = createDataModelsFromJson();
   
  } catch (error) {
    console.error(`Error seeding the database: ${error} `);
    throw new Error(`Error seeding the database: ${error} `);
  }
};

export default seedDatabaseWithData;
