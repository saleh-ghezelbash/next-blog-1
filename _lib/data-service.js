"use server";

import prisma from "@/prisma/prisma";

export const getCategories = async () => {
  return await prisma.category.findMany();
};

export const getPostById = async (id) => {
  return await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
    },
  });

};

export const getPostsByCategoryId = async (id) => {
  return await prisma.post.findMany({
    where: {
      category_id: id,
    },
    include: {
      category: true,
      user: true,
      _count: {
        select: { comment: true, like: true },
      },
    },
  });

};

export const getAuthorById = async (id) => {
  return await prisma.user.findUnique({
    where: {
      id,
    },
  });

};

export const getSemilarPostsByCategoryId = async (id) => {
  return await prisma.post.findMany({
    where: {
      category_id: id,
    },
    skip: 0,
    take: 10,
  });

};

export const getPostComments = async (postId) => {
  return await prisma.comment.findMany({
    where: {
      post_id: postId,
    },
    include: {
      user: true,
    },
  });
};

export const getPostLikesNumber = async (postId) => {
  return await prisma.like.count({
    where: {
      post_id: postId,
    },
  });

};

export const getTagsByPostId = async (postId) => {
  return await prisma.tag.findMany({
    where: {
      post_tag: {
        some: {
          post_id: postId,
        },
      },
    },
  });

};

export const getLatestPosts = async (userId, skip = 0) => {
  return await prisma.post.findMany({
    where: {
      ...(userId && { user_id: userId }),
    },
    skip,
    take: 6,
    orderBy: {
      created_at: "desc",
    },
    include: {
      category: true,
      user: true,
      _count: {
        select: { comment: true, like: true },
      },
    },
  });

};

export const getLatestPostsByCategoryName = async (category) => {
  return await prisma.post.findMany({
    where: {
      category: {
        is: {
          name: category,
        },
      },
    },
    skip: 0,
    take: 5,
    orderBy: {
      created_at: "desc",
    },
    include: {
      category: true,
    },
  });

};

export const getPostBySearchValue = async (val) => {
  return await prisma.post.findMany({
    where: {
      OR: [
        {
          title: {
            contains: val,
          },
        },
        { body: { contains: val } },
      ],
    },
    skip: 0,
    take: 5,
    orderBy: {
      created_at: "desc",
    },
    include: {
      category: true,
      user: true,
      _count: {
        select: { comment: true, like: true },
      },
    },
  });

};

export const getMostCommentsPosts = async (skip = 0) => {
  return await prisma.post.findMany({
    skip,
    take: 6,
    orderBy: [
      {
        comment: {
          _count: "desc",
        },
      },
      {
        created_at: "desc",
      },
    ],
    include: {
      category: true,
      user: true,
      _count: {
        select: { comment: true, like: true },
      },
    },
  });
};

export const getMostLikedPosts = async () => {
  return await prisma.post.findMany({
    skip: 0,
    take: 12,
    orderBy: [
      {
        like: {
          _count: "desc",
        },
      },
      {
        created_at: "desc",
      },
    ],
    include: {
      category: true,
      user: true,
      _count: {
        select: { comment: true, like: true },
      },
    },
  });

};

export const getPostsByTagId = async (tagId, skip = 0) => {
  return await prisma.post.findMany({
    where: {
      post_tag: {
        some: {
          tag_id: tagId,
        },
      },
    },
    include: {
      post_tag: {
        include: {
          tag: true,
        },
      },
      category: true,
      user: true,
      _count: {
        select: { comment: true, like: true },
      },
    },
    skip,
    take: 12,
    orderBy: {
      created_at: "desc",
    },
  });
};

export const getTagById = async (tagId) => {
  return await prisma.tag.findUnique({
    where: {
      id: tagId,
    },
  });
};

export const getRandomPosts = async () => {
  return await prisma.$queryRaw`SELECT * FROM post ORDER BY RANDOM() LIMIT 12`;
};
