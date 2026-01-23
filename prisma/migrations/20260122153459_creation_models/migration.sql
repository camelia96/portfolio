-- CreateTable
CREATE TABLE "Skills" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Skills_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Files" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Files_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Data" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "role" TEXT,
    "phone" TEXT,
    "email" TEXT,
    "description" VARCHAR(500),
    "linkedin" TEXT,
    "github" TEXT,
    "behance" TEXT,

    CONSTRAINT "Data_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CV" (
    "id" SERIAL NOT NULL,
    "role" TEXT,
    "timeline" TEXT,
    "description" VARCHAR(500),
    "company" TEXT,
    "location" TEXT,
    "professional" BOOLEAN NOT NULL,
    "academic" BOOLEAN NOT NULL,

    CONSTRAINT "CV_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Projects" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "year" INTEGER,
    "description" VARCHAR(500),
    "link" TEXT,
    "repository" TEXT,

    CONSTRAINT "Projects_pkey" PRIMARY KEY ("id")
);
