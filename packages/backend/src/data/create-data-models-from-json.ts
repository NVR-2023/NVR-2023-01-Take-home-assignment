import readJsonFile from "utils/read-json";
import * as path from "path";
import { SecurityType } from "types/seed-data-types";

const createDataModelsFromJson = (): SecurityType[] | null => {
  const filePath = path.resolve("src/data", "data (2) (1).json");

  try {
    const data: SecurityType[] = readJsonFile(filePath);
    return data;
  } catch (error) {
    console.error(`Error reading from json file ${filePath}: ${error}`);
    return null;
  }
};

export default createDataModelsFromJson;
