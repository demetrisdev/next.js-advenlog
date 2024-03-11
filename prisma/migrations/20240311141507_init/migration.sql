-- CreateTable
CREATE TABLE "Travel" (
    "id" SERIAL NOT NULL,
    "slug" TEXT,
    "title" TEXT,
    "image" TEXT,
    "summary" TEXT,
    "instructions" TEXT,
    "creator" TEXT,
    "creator_email" TEXT,

    CONSTRAINT "Travel_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Travel_slug_key" ON "Travel"("slug");
