import * as fs from "fs";
import { SecurityType } from "types/data-types";

const readJsonFile = (filePath: string): SecurityType[] => {
  const jsonData = fs.readFileSync(filePath, "utf-8");
  const parsedJsonData = JSON.parse(jsonData);
  return parsedJsonData;
};

export default readJsonFile;
