/*
  Warnings:

  - You are about to drop the column `namo` on the `test` table. All the data in the column will be lost.
  - Added the required column `cor` to the `test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `test` DROP COLUMN `namo`,
    ADD COLUMN `cor` VARCHAR(191) NOT NULL;
