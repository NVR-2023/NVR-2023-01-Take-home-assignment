import readJsonFile from "utils/read-json";
import * as path from "path";
const createDataModelsFromJson = () => {
    const filePath = path.resolve("src/seed-data/data", "data (2) (1).json");
    try {
        let data = readJsonFile(filePath);
        data = data.map((security) => (Object.assign(Object.assign({}, security), { trend: parseFloat(security.trend), prices: security.prices.map((price) => (Object.assign(Object.assign({}, price), { date: new Date(price.date), close: parseFloat(price.close), volume: parseInt(price.volume) }))) })));
        return data;
    }
    catch (error) {
        console.error(`Error reading from json file ${filePath}: ${error}`);
        throw new Error(`Error reading from json file ${filePath}: ${error}`);
    }
};
export default createDataModelsFromJson;
