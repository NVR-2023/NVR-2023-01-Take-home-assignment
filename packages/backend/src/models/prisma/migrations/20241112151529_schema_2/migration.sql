/*
  Warnings:

  - You are about to drop the column `stockId` on the `prices` table. All the data in the column will be lost.
  - You are about to drop the `stocks` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `securityId` to the `prices` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "prices" DROP CONSTRAINT "prices_stockId_fkey";

-- AlterTable
ALTER TABLE "prices" DROP COLUMN "stockId",
ADD COLUMN     "securityId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "stocks";

-- CreateTable
CREATE TABLE "securities" (
    "id" SERIAL NOT NULL,
    "ticker" TEXT NOT NULL,
    "securityName" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "trend" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "securities_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "securities_ticker_key" ON "securities"("ticker");

-- AddForeignKey
ALTER TABLE "prices" ADD CONSTRAINT "prices_securityId_fkey" FOREIGN KEY ("securityId") REFERENCES "securities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
