/*
  Warnings:

  - You are about to drop the column `class_id` on the `class_leader` table. All the data in the column will be lost.
  - You are about to drop the column `position` on the `class_leader` table. All the data in the column will be lost.
  - You are about to drop the column `full_name` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `student` table. All the data in the column will be lost.
  - You are about to drop the column `student_id` on the `student` table. All the data in the column will be lost.
  - The `role` column on the `student` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - A unique constraint covering the columns `[student_code]` on the table `student` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `middle_name` to the `student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `student_code` to the `student` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('main_monitor', 'assistant_monitor', 'secretary', 'discipline_leader', 'sports_leader', 'education_leader', 'student');

-- DropForeignKey
ALTER TABLE "class_leader" DROP CONSTRAINT "class_leader_class_id_fkey";

-- DropIndex
DROP INDEX "class_leader_class_id_idx";

-- DropIndex
DROP INDEX "class_leader_position_idx";

-- DropIndex
DROP INDEX "student_student_id_key";

-- AlterTable
ALTER TABLE "class_leader" DROP COLUMN "class_id",
DROP COLUMN "position";

-- AlterTable
ALTER TABLE "student" DROP COLUMN "full_name",
DROP COLUMN "password",
DROP COLUMN "student_id",
ADD COLUMN     "middle_name" TEXT NOT NULL,
ADD COLUMN     "student_code" TEXT NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'student';

-- DropEnum
DROP TYPE "roles";

-- CreateIndex
CREATE UNIQUE INDEX "student_student_code_key" ON "student"("student_code");

-- CreateIndex
CREATE INDEX "student_role_idx" ON "student"("role");
