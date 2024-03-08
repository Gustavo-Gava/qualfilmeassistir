/*
  Warnings:

  - The `categories` column on the `Movie` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `ageRange` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mood` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('TRUE_STORY', 'CHANGE_WAY_TO_LOOK_AT_LIFE');

-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('ACTION', 'COMEDY', 'DRAMA', 'HORROR');

-- CreateEnum
CREATE TYPE "AgeRange" AS ENUM ('G_RATED', 'PG_RATED', 'PG_13_RATED', 'R_RATED');

-- CreateEnum
CREATE TYPE "Mood" AS ENUM ('HAPPY', 'NEUTRAL', 'SAD');

-- AlterTable
ALTER TABLE "Movie" ADD COLUMN     "ageRange" "AgeRange" NOT NULL,
ADD COLUMN     "genres" "Genre"[],
ADD COLUMN     "mood" "Mood" NOT NULL,
DROP COLUMN "categories",
ADD COLUMN     "categories" "Category"[];
