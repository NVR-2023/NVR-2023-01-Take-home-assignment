/*
  Warnings:

  - You are about to drop the `prices` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `securities` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "prices" DROP CONSTRAINT "prices_securityId_fkey";

-- DropTable
DROP TABLE "prices";

-- DropTable
DROP TABLE "securities";

-- CreateTable
CREATE TABLE "Security" (
    "id" SERIAL NOT NULL,
    "ticker" TEXT NOT NULL,
    "securityName" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "trend" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "Security_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Price" (
    "id" SERIAL NOT NULL,
    "securityId" INTEGER NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "close" DECIMAL(10,4) NOT NULL,
    "volume" INTEGER NOT NULL,

    CONSTRAINT "Price_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Security_ticker_key" ON "Security"("ticker");

-- AddForeignKey
ALTER TABLE "Price" ADD CONSTRAINT "Price_securityId_fkey" FOREIGN KEY ("securityId") REFERENCES "Security"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
