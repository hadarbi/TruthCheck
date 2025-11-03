-- CreateTable
CREATE TABLE "public"."AnalysisHistory" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "result" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnalysisHistory_pkey" PRIMARY KEY ("id")
);
