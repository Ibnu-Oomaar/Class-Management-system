/*
  Warnings:

  - You are about to drop the column `class_id` on the `competition` table. All the data in the column will be lost.
  - You are about to drop the column `class_id` on the `student` table. All the data in the column will be lost.
  - You are about to drop the `class` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "competition" DROP CONSTRAINT "competition_class_id_fkey";

-- DropForeignKey
ALTER TABLE "student" DROP CONSTRAINT "student_class_id_fkey";

-- DropIndex
DROP INDEX "competition_class_id_idx";

-- DropIndex
DROP INDEX "student_class_id_idx";

-- AlterTable
ALTER TABLE "competition" DROP COLUMN "class_id";

-- AlterTable
ALTER TABLE "student" DROP COLUMN "class_id";

-- DropTable
DROP TABLE "class";
