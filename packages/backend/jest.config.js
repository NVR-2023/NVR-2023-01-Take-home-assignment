/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {}],
  },
  moduleNameMapper: {
    "^controllers/(.*)$": "<rootDir>/src/controllers/$1",
    "^models/(.*)$": "<rootDir>/src/models/$1",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  roots: ["<rootDir>/src"],
  setupFiles: ["<rootDir>/src/_tests_/_mock_/_mock_prisma.ts"],
};
