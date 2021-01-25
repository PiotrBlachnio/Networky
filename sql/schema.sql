CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE "User" (
    id UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v1(),
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    gender TEXT NOT NULL
);