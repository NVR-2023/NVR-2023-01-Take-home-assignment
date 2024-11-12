import readJsonFile from "utils/read-json";
import * as path from "path";
import { SecurityType } from "types/data-types";

const createDataModelsFromJson = (): SecurityType[] => {
  const filePath = path.resolve("src/seed-data/data", "data (2) (1).json");

  try {
    let data: SecurityType[] = readJsonFile(filePath);

    data = data.map((security) => ({
      ...security,
      trend: parseFloat(security.trend as unknown as string), 
      prices: security.prices.map((price: any) => ({
        ...price,
        close: parseFloat(price.close), 
        volume: parseInt(price.volume), 
      })),
    }));

    return data;
  } catch (error) {
    console.error(`Error reading from json file ${filePath}: ${error}`);
    throw new Error(`Error reading from json file ${filePath}: ${error}`);
  }
};

export default createDataModelsFromJson;
