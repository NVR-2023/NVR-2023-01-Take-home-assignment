var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import createDataModelsFromJson from "./create-data-models-from-json";
import checkIfSecurityTableIsEmpty from "./check-if-security-table-is-empty";
import prisma from "models/prisma/prisma";
const seedDatabaseWithData = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Starting seeding process...");
    try {
        const isSecurityTableEmpty = yield checkIfSecurityTableIsEmpty();
        if (!isSecurityTableEmpty) {
            console.log("Security table already populated");
            return false;
        }
        const securities = createDataModelsFromJson();
        yield prisma.$transaction((prisma) => __awaiter(void 0, void 0, void 0, function* () {
            for (const security of securities) {
                const currentSecurity = yield prisma.security.create({
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
                yield prisma.price.createMany({
                    data: priceData,
                });
            }
        }));
        console.log("Database successfully seeded");
        return true;
    }
    catch (error) {
        console.error(`Error seeding the database: ${error} `);
        throw new Error(`Error seeding the database: ${error} `);
    }
});
export default seedDatabaseWithData;
