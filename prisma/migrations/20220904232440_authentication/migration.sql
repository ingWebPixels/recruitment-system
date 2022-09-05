-- DropForeignKey
ALTER TABLE "Commentaries" DROP CONSTRAINT "Commentaries_interviewId_fkey";

-- DropForeignKey
ALTER TABLE "Document" DROP CONSTRAINT "Document_vacantId_fkey";

-- DropForeignKey
ALTER TABLE "Interview" DROP CONSTRAINT "Interview_userVacantId_fkey";

-- DropForeignKey
ALTER TABLE "UserVacantDocuments" DROP CONSTRAINT "UserVacantDocuments_documentId_fkey";

-- DropForeignKey
ALTER TABLE "UserVacantDocuments" DROP CONSTRAINT "UserVacantDocuments_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserVacantDocuments" DROP CONSTRAINT "UserVacantDocuments_usersOnVacanciesId_fkey";

-- DropForeignKey
ALTER TABLE "UserVacantDocuments" DROP CONSTRAINT "UserVacantDocuments_vacantId_fkey";

-- DropForeignKey
ALTER TABLE "UsersOnInterviews" DROP CONSTRAINT "UsersOnInterviews_interviewId_fkey";

-- DropForeignKey
ALTER TABLE "UsersOnVacancies" DROP CONSTRAINT "UsersOnVacancies_userId_fkey";

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "emailVerified" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Document" ADD CONSTRAINT "Document_vacantId_fkey" FOREIGN KEY ("vacantId") REFERENCES "Vacant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnVacancies" ADD CONSTRAINT "UsersOnVacancies_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserVacantDocuments" ADD CONSTRAINT "UserVacantDocuments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserVacantDocuments" ADD CONSTRAINT "UserVacantDocuments_vacantId_fkey" FOREIGN KEY ("vacantId") REFERENCES "Vacant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserVacantDocuments" ADD CONSTRAINT "UserVacantDocuments_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Document"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserVacantDocuments" ADD CONSTRAINT "UserVacantDocuments_usersOnVacanciesId_fkey" FOREIGN KEY ("usersOnVacanciesId") REFERENCES "UsersOnVacancies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Interview" ADD CONSTRAINT "Interview_userVacantId_fkey" FOREIGN KEY ("userVacantId") REFERENCES "UsersOnVacancies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UsersOnInterviews" ADD CONSTRAINT "UsersOnInterviews_interviewId_fkey" FOREIGN KEY ("interviewId") REFERENCES "Interview"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Commentaries" ADD CONSTRAINT "Commentaries_interviewId_fkey" FOREIGN KEY ("interviewId") REFERENCES "Interview"("id") ON DELETE CASCADE ON UPDATE CASCADE;
