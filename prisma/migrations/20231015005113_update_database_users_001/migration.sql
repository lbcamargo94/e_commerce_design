-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "blocked" BOOLEAN NOT NULL DEFAULT false,
    "email" VARCHAR(50) NOT NULL,
    "isValidate" BOOLEAN NOT NULL DEFAULT false,
    "name" VARCHAR(50) NOT NULL,
    "password" VARCHAR(50),
    "validationCode" VARCHAR(6),
    "createdAt" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMPTZ NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_id_key" ON "users"("id");
