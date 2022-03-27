-- CreateTable
CREATE TABLE "recipe" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "name" VARCHAR,

    CONSTRAINT "recipe_pkey" PRIMARY KEY ("id")
);
