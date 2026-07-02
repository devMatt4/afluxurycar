/*
  Warnings:

  - You are about to drop the column `phone` on the `SiteSettings` table. All the data in the column will be lost.
  - Added the required column `phonePrimary` to the `SiteSettings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "SiteSettings" DROP COLUMN "phone",
ADD COLUMN     "city" TEXT,
ADD COLUMN     "phonePrimary" TEXT NOT NULL,
ADD COLUMN     "phoneSecondary" TEXT,
ADD COLUMN     "tiktok" TEXT;
