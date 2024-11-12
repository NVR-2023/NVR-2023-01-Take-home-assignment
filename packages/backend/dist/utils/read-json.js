import * as fs from "fs";
const readJsonFile = (filePath) => {
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const parsedJsonData = JSON.parse(jsonData);
    return parsedJsonData;
};
export default readJsonFile;
