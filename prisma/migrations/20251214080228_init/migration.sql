-- CreateTable
CREATE TABLE "category" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT,
    "name_fa" TEXT
);

-- CreateTable
CREATE TABLE "comment" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" BIGINT,
    "post_id" BIGINT,
    "body" TEXT,
    "parent_id" BIGINT,
    CONSTRAINT "comment_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "comment" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "comment_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "post" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "comment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "like" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" BIGINT,
    "post_id" BIGINT,
    CONSTRAINT "like_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "post" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "like_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "post" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT,
    "body" TEXT,
    "image" TEXT,
    "category_id" BIGINT,
    "user_id" BIGINT,
    CONSTRAINT "post_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "category" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "post_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "post_tag" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "post_id" BIGINT,
    "tag_id" BIGINT,
    CONSTRAINT "post_tag_post_id_fkey" FOREIGN KEY ("post_id") REFERENCES "post" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION,
    CONSTRAINT "post_tag_tag_id_fkey" FOREIGN KEY ("tag_id") REFERENCES "tag" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "tag" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT
);

-- CreateTable
CREATE TABLE "user" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "username" TEXT,
    "password" TEXT,
    "bio" TEXT,
    "avatar" TEXT,
    "name" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "post_title_key" ON "post"("title");

-- CreateIndex
CREATE UNIQUE INDEX "tag_name_key" ON "tag"("name");

-- CreateIndex
CREATE UNIQUE INDEX "user_username_key" ON "user"("username");
