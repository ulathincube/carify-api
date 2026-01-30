/*
  Warnings:

  - You are about to drop the column `carId` on the `CarPart` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[categoryId]` on the table `CarPart` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `carId` to the `Category` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "CarPart" DROP CONSTRAINT "CarPart_carId_fkey";

-- AlterTable
ALTER TABLE "CarPart" DROP COLUMN "carId";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "carId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "CarPart_categoryId_key" ON "CarPart"("categoryId");

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_carId_fkey" FOREIGN KEY ("carId") REFERENCES "Car"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
