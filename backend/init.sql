
CREATE TABLE IF NOT EXISTS "users" (
  "id" SERIAL, 
  "slug" VARCHAR(255) NOT NULL UNIQUE, 
  "favourites" VARCHAR(255)[], 
  "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT CURRENT_TIMESTAMP, 
  PRIMARY KEY ("id")
);

INSERT INTO "users" ("slug", "favourites") VALUES ('senior-candidate', ARRAY ['1']);
