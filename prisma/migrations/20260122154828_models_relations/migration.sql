-- CreateTable
CREATE TABLE "Projects_Files" (
    "project_id" INTEGER NOT NULL,
    "file_id" INTEGER NOT NULL,

    CONSTRAINT "Projects_Files_pkey" PRIMARY KEY ("project_id","file_id")
);

-- CreateTable
CREATE TABLE "Projects_Skills" (
    "project_id" INTEGER NOT NULL,
    "skill_id" INTEGER NOT NULL,

    CONSTRAINT "Projects_Skills_pkey" PRIMARY KEY ("project_id","skill_id")
);

-- CreateTable
CREATE TABLE "Projects_Categories" (
    "project_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,

    CONSTRAINT "Projects_Categories_pkey" PRIMARY KEY ("project_id","category_id")
);

-- AddForeignKey
ALTER TABLE "Projects_Files" ADD CONSTRAINT "Projects_Files_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects_Files" ADD CONSTRAINT "Projects_Files_file_id_fkey" FOREIGN KEY ("file_id") REFERENCES "Files"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects_Skills" ADD CONSTRAINT "Projects_Skills_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects_Skills" ADD CONSTRAINT "Projects_Skills_skill_id_fkey" FOREIGN KEY ("skill_id") REFERENCES "Skills"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects_Categories" ADD CONSTRAINT "Projects_Categories_project_id_fkey" FOREIGN KEY ("project_id") REFERENCES "Projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Projects_Categories" ADD CONSTRAINT "Projects_Categories_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
