-- CreateEnum
CREATE TYPE "StudentStatus" AS ENUM ('active', 'suspended', 'rejected', 'transferred');

-- CreateEnum
CREATE TYPE "roles" AS ENUM ('main_monitor', 'assistant_monitor', 'secretary', 'discipline_leader', 'sports_leader', 'education_leader', 'student');

-- CreateEnum
CREATE TYPE "DisciplineSeverity" AS ENUM ('low', 'medium', 'high', 'critical');

-- CreateEnum
CREATE TYPE "DisciplineAction" AS ENUM ('warning', 'recorded', 'referred_to_admin', 'class_rejection');

-- CreateEnum
CREATE TYPE "ImpactType" AS ENUM ('positive', 'negative');

-- CreateEnum
CREATE TYPE "AchievementType" AS ENUM ('academic', 'leadership', 'sports', 'discipline', 'community');

-- CreateEnum
CREATE TYPE "CompetitionType" AS ENUM ('football', 'quiz', 'academic');

-- CreateTable
CREATE TABLE "class" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "academic_year" TEXT NOT NULL,
    "description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "class_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "student" (
    "id" SERIAL NOT NULL,
    "student_id" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "roles" NOT NULL DEFAULT 'student',
    "first_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "full_name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "class_id" INTEGER NOT NULL,
    "status" "StudentStatus" NOT NULL DEFAULT 'active',
    "registered_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "student_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "class_leader" (
    "id" SERIAL NOT NULL,
    "position" "roles" NOT NULL,
    "student_id" INTEGER NOT NULL,
    "class_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "class_leader_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "achievement" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "type" "AchievementType" NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,
    "achieved_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "student_id" INTEGER NOT NULL,
    "registered_by_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "achievement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "discipline_case" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "severity" "DisciplineSeverity" NOT NULL,
    "action" "DisciplineAction" NOT NULL,
    "incident_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "student_id" INTEGER NOT NULL,
    "registered_by_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "discipline_case_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "class_impact" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "type" "ImpactType" NOT NULL,
    "points" INTEGER NOT NULL DEFAULT 0,
    "impact_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "student_id" INTEGER NOT NULL,
    "registered_by_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "class_impact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "competition" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" "CompetitionType" NOT NULL,
    "start_date" TIMESTAMP(3) NOT NULL,
    "end_date" TIMESTAMP(3),
    "class_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "competition_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "competition_participant" (
    "id" SERIAL NOT NULL,
    "student_id" INTEGER NOT NULL,
    "competition_id" INTEGER NOT NULL,
    "position" TEXT,
    "points" INTEGER NOT NULL DEFAULT 0,
    "joined_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "competition_participant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "class_academic_year_idx" ON "class"("academic_year");

-- CreateIndex
CREATE INDEX "class_deleted_at_idx" ON "class"("deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "class_name_academic_year_key" ON "class"("name", "academic_year");

-- CreateIndex
CREATE UNIQUE INDEX "student_student_id_key" ON "student"("student_id");

-- CreateIndex
CREATE UNIQUE INDEX "student_phone_key" ON "student"("phone");

-- CreateIndex
CREATE INDEX "student_class_id_idx" ON "student"("class_id");

-- CreateIndex
CREATE INDEX "student_status_idx" ON "student"("status");

-- CreateIndex
CREATE INDEX "student_role_idx" ON "student"("role");

-- CreateIndex
CREATE INDEX "student_deleted_at_idx" ON "student"("deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "class_leader_student_id_key" ON "class_leader"("student_id");

-- CreateIndex
CREATE INDEX "class_leader_class_id_idx" ON "class_leader"("class_id");

-- CreateIndex
CREATE INDEX "class_leader_position_idx" ON "class_leader"("position");

-- CreateIndex
CREATE INDEX "class_leader_deleted_at_idx" ON "class_leader"("deleted_at");

-- CreateIndex
CREATE INDEX "achievement_student_id_idx" ON "achievement"("student_id");

-- CreateIndex
CREATE INDEX "achievement_registered_by_id_idx" ON "achievement"("registered_by_id");

-- CreateIndex
CREATE INDEX "achievement_type_idx" ON "achievement"("type");

-- CreateIndex
CREATE INDEX "achievement_achieved_at_idx" ON "achievement"("achieved_at");

-- CreateIndex
CREATE INDEX "achievement_deleted_at_idx" ON "achievement"("deleted_at");

-- CreateIndex
CREATE INDEX "discipline_case_student_id_idx" ON "discipline_case"("student_id");

-- CreateIndex
CREATE INDEX "discipline_case_registered_by_id_idx" ON "discipline_case"("registered_by_id");

-- CreateIndex
CREATE INDEX "discipline_case_severity_idx" ON "discipline_case"("severity");

-- CreateIndex
CREATE INDEX "discipline_case_incident_date_idx" ON "discipline_case"("incident_date");

-- CreateIndex
CREATE INDEX "discipline_case_deleted_at_idx" ON "discipline_case"("deleted_at");

-- CreateIndex
CREATE INDEX "class_impact_student_id_idx" ON "class_impact"("student_id");

-- CreateIndex
CREATE INDEX "class_impact_registered_by_id_idx" ON "class_impact"("registered_by_id");

-- CreateIndex
CREATE INDEX "class_impact_type_idx" ON "class_impact"("type");

-- CreateIndex
CREATE INDEX "class_impact_impact_date_idx" ON "class_impact"("impact_date");

-- CreateIndex
CREATE INDEX "class_impact_deleted_at_idx" ON "class_impact"("deleted_at");

-- CreateIndex
CREATE INDEX "competition_class_id_idx" ON "competition"("class_id");

-- CreateIndex
CREATE INDEX "competition_type_idx" ON "competition"("type");

-- CreateIndex
CREATE INDEX "competition_start_date_idx" ON "competition"("start_date");

-- CreateIndex
CREATE INDEX "competition_deleted_at_idx" ON "competition"("deleted_at");

-- CreateIndex
CREATE INDEX "competition_participant_student_id_idx" ON "competition_participant"("student_id");

-- CreateIndex
CREATE INDEX "competition_participant_competition_id_idx" ON "competition_participant"("competition_id");

-- CreateIndex
CREATE INDEX "competition_participant_deleted_at_idx" ON "competition_participant"("deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "competition_participant_student_id_competition_id_key" ON "competition_participant"("student_id", "competition_id");

-- AddForeignKey
ALTER TABLE "student" ADD CONSTRAINT "student_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_leader" ADD CONSTRAINT "class_leader_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_leader" ADD CONSTRAINT "class_leader_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "achievement" ADD CONSTRAINT "achievement_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "achievement" ADD CONSTRAINT "achievement_registered_by_id_fkey" FOREIGN KEY ("registered_by_id") REFERENCES "class_leader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "discipline_case" ADD CONSTRAINT "discipline_case_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "discipline_case" ADD CONSTRAINT "discipline_case_registered_by_id_fkey" FOREIGN KEY ("registered_by_id") REFERENCES "class_leader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_impact" ADD CONSTRAINT "class_impact_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_impact" ADD CONSTRAINT "class_impact_registered_by_id_fkey" FOREIGN KEY ("registered_by_id") REFERENCES "class_leader"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "competition" ADD CONSTRAINT "competition_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "class"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "competition_participant" ADD CONSTRAINT "competition_participant_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "competition_participant" ADD CONSTRAINT "competition_participant_competition_id_fkey" FOREIGN KEY ("competition_id") REFERENCES "competition"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
