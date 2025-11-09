/*
  Warnings:

  - You are about to drop the column `result` on the `AnalysisHistory` table. All the data in the column will be lost.
  - You are about to drop the column `text` on the `AnalysisHistory` table. All the data in the column will be lost.
  - Added the required column `analysisResult` to the `AnalysisHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `inputText` to the `AnalysisHistory` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sourceText` to the `AnalysisHistory` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."AnalysisHistory" DROP COLUMN "result",
DROP COLUMN "text",
ADD COLUMN     "analysisResult" JSONB NOT NULL,
ADD COLUMN     "inputText" TEXT NOT NULL,
ADD COLUMN     "sourceText" TEXT NOT NULL;
