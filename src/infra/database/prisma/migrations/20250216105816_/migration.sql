/*
  Warnings:

  - You are about to drop the column `name` on the `test` table. All the data in the column will be lost.
  - Added the required column `namo` to the `test` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `test` DROP COLUMN `name`,
    ADD COLUMN `namo` VARCHAR(191) NOT NULL;
