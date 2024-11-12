var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import prisma from "models/prisma/prisma";
const getAllSecuritiesFromDatabase = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Function GET ALL entered");
    try {
        console.log("Function GET ALL entered - inside block");
        const result = yield prisma.security.findMany();
        return result;
        console.log("*** RESULt ***");
        console.log(result);
        if (!result) {
            console.log("empty array");
        }
    }
    catch (error) {
        console.error(`Error getting all securities from database: ${error} `);
        throw new Error(`Error getting all securities from database: ${error} `);
    }
});
export default getAllSecuritiesFromDatabase;
