-- CreateTable
CREATE TABLE "Post" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "categories" TEXT[],
    "avatarUrl" TEXT NOT NULL,
    "trailerUrl" TEXT,

    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Post_name_idx" ON "Post"("name");
