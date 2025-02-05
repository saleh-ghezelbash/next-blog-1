'use server' 

import prisma from "@/prisma/prisma";

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

export const getPostComments = async (postId) => {
  const data = await prisma.comment.findMany({
    where: {
      post_id: postId
    },
    include: {
      user: true
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

export const getLatestPost = async (skip) => {
  console.log("skip::", skip);
  
  const data = await prisma.post.findMany({
    skip,
    take: 7,
    orderBy: {
      created_at: 'desc'
    },
    include: {
      category: true,
      user: true,
      _count: {
        select: { comment: true, like: true },
      },
    },
  })
  console.log("posts: ", data);
  
  return data;
}

export const getLatestCategoryByName = async (category) => {
  const data = await prisma.post.findMany({
    where:{
      category: {
        is: {
          name: category
        }
      }
    },
    skip: 0,
    take: 5,
    orderBy: {
      created_at: 'desc'
    },
    include: {
      category: true,
    },
  })
  // console.log("post by category:", data);
  
  return data;
}