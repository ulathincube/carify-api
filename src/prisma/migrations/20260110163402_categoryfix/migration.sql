/*
  Warnings:

  - Added the required column `categoryId` to the `CarPart` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "CarPart" ADD COLUMN     "categoryId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "CarPart" ADD CONSTRAINT "CarPart_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
