-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('CC', 'NIT');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'CANDIDATE');

-- CreateEnum
CREATE TYPE "ContractType" AS ENUM ('UNDEFINED', 'DEFINED', 'PROVISION_SERVICE');

-- CreateEnum
CREATE TYPE "VacantStatus" AS ENUM ('PENDING', 'INTERVIEW', 'SEND_DOCUMENTS', 'REVIEW', 'REJECTED', 'APPROVED');

-- CreateEnum
CREATE TYPE "AttachedType" AS ENUM ('CANDIDATE', 'BUSINESS');

-- CreateEnum
CREATE TYPE "InterviewType" AS ENUM ('PRESENTIAL', 'VIRTUAL');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "surname" VARCHAR(100) NOT NULL,
    "document" VARCHAR(16) NOT NULL,
    "document_type" "DocumentType" NOT NULL DEFAULT 'CC',
    "phone" VARCHAR(14),
    "role" "Role" NOT NULL DEFAULT 'CANDIDATE',
    "first_login" TIMESTAMP(3),
    "photo_uri" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vacant" (
    "id" TEXT NOT NULL,
    "job_title_id" TEXT NOT NULL,
    "max_candidaties" INTEGER NOT NULL,
    "min_salary" DOUBLE PRECISION NOT NULL,
    "max_salary" DOUBLE PRECISION NOT NULL,
    "init_date" TIMESTAMP(3),
    "contract_type" VARCHAR(14),
    "created_by" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Vacant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobTitle" (
    "id" TEXT NOT NULL,
    "code" VARCHAR(100) NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "JobTitle_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Document" (
    "id" TEXT NOT NULL,
    "vacant_id" TEXT NOT NULL,
    "type" "AttachedType" NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Document_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersOnVacancies" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "vacant_id" TEXT NOT NULL,
    "status" "VacantStatus" NOT NULL DEFAULT 'PENDING',
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "UsersOnVacancies_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserVacantDocuments" (
    "id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "vacant_id" TEXT NOT NULL,
    "document_id" TEXT NOT NULL,
    "uri" TEXT,
    "default_uri" TEXT,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),
    "usersOnVacanciesId" TEXT,

    CONSTRAINT "UserVacantDocuments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Interview" (
    "id" TEXT NOT NULL,
    "user_vacant_id" TEXT NOT NULL,
    "title" VARCHAR(100) NOT NULL,
    "description" TEXT NOT NULL,
    "location" VARCHAR(255) NOT NULL,
    "type" "InterviewType" NOT NULL,
    "init_date" TIMESTAMP(3) NOT NULL,
    "final_Date" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Interview_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UsersOnInterviews" (
    "id" TEXT NOT NULL,
    "interview_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "UsersOnInterviews_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Commentaries" (
    "id" TEXT NOT NULL,
    "interview_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "value" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3),

    CONSTRAINT "Commentaries_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "JobTitle_code_key" ON "JobTitle"("code");

-- CreateIndex
CREATE UNIQUE INDEX "UsersOnVacancies_user_id_vacant_id_key" ON "UsersOnVacancies"("user_id", "vacant_id");

-- CreateIndex
CREATE UNIQUE INDEX "UserVacantDocuments_user_id_vacant_id_document_id_key" ON "UserVacantDocuments"("user_id", "vacant_id", "document_id");

-- AddForeignKey
ALTER TABLE "Vacant" ADD CONSTRAINT "Vacant_job_title_id_fkey" FOREIGN KEY ("job_title_id") REFERENCES "JobTitle"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Vacant" ADD CONSTRAINT "Vacant_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_vacant_id_fkey" FOREIGN KEY ("vacant_id") REFERENCES "Vacant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnVacancies" ADD CONSTRAINT "UsersOnVacancies_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnVacancies" ADD CONSTRAINT "UsersOnVacancies_vacant_id_fkey" FOREIGN KEY ("vacant_id") REFERENCES "Vacant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserVacantDocuments" ADD CONSTRAINT "UserVacantDocuments_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserVacantDocuments" ADD CONSTRAINT "UserVacantDocuments_vacant_id_fkey" FOREIGN KEY ("vacant_id") REFERENCES "Vacant"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserVacantDocuments" ADD CONSTRAINT "UserVacantDocuments_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "Document"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserVacantDocuments" ADD CONSTRAINT "UserVacantDocuments_usersOnVacanciesId_fkey" FOREIGN KEY ("usersOnVacanciesId") REFERENCES "UsersOnVacancies"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_user_vacant_id_fkey" FOREIGN KEY ("user_vacant_id") REFERENCES "UsersOnVacancies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnInterviews" ADD CONSTRAINT "UsersOnInterviews_interview_id_fkey" FOREIGN KEY ("interview_id") REFERENCES "Interview"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnInterviews" ADD CONSTRAINT "UsersOnInterviews_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentaries" ADD CONSTRAINT "Commentaries_interview_id_fkey" FOREIGN KEY ("interview_id") REFERENCES "Interview"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentaries" ADD CONSTRAINT "Commentaries_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
