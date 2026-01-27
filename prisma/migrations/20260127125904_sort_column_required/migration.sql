/*
  Warnings:

  - Made the column `sort` on table `CV` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "CV" ALTER COLUMN "sort" SET NOT NULL;
