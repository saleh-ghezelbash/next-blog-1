import prisma from "@/prisma/prisma";
// import { supabase } from "./supabase";

export const getCategories = async () => {
  const data = await prisma.category.findMany();

  return data;
};

export const getPostById = async (id) => {
  const data = await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });

  return data;
};

export const getPostsByCategoryId = async (id) => {
  const data = await prisma.post.findMany({
    where: {
      category_id: id,
    },
    include: {
      category: true,
    },
  });

  return data;
};

export const getAuthorById = async (id) => {
  const data = await prisma.user.findUnique({
    where: {
      id,
    },
  });

  return data;
};

export const getSemilarPostsByCategoryId = async (id) => {
  const data = await prisma.post.findMany({
    where: {
      category_id: id,
    },
    skip: 0,
    take: 10,
  });

  return data;
};

export const getPostComments = async (postId, userId) => {
  const data = await prisma.comment.findMany({
    where: {
      post_id: postId,
      user_id: userId,
    },
    include: {
      user: true,
    },
  });

  return data;
};

export const getPostLikesNumber = async (postId) => {
  const data = await prisma.like.count({
    where: {
      post_id: postId,
    },
  });

  return data;
};

export const getTagsByPostId = async (postId) => {
  const data = await prisma.tag.findMany({
    where: {
      post_tag: {
        some: {
          post_id: postId,
        },
      },
    },
  });

  return data;
};
