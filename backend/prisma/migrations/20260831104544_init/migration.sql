/*
  Warnings:

  - The values [secretary] on the enum `Role` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Role_new" AS ENUM ('main_monitor', 'assistant_monitor', 'discipline_leader', 'sports_leader', 'education_leader', 'student');
ALTER TABLE "public"."student" ALTER COLUMN "role" DROP DEFAULT;
ALTER TABLE "student" ALTER COLUMN "role" TYPE "Role_new" USING ("role"::text::"Role_new");
ALTER TYPE "Role" RENAME TO "Role_old";
ALTER TYPE "Role_new" RENAME TO "Role";
DROP TYPE "public"."Role_old";
ALTER TABLE "student" ALTER COLUMN "role" SET DEFAULT 'student';
COMMIT;
