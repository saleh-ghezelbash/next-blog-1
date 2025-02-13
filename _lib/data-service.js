"use server";

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
      user: true,
      _count: {
        select: { comment: true, like: true },
      },
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
      post_id: postId,
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

export const getLatestPosts = async (skip) => {
  console.log("skip::", skip);

  const data = await prisma.post.findMany({
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
  console.log("latest posts:", data);

  return data;
};

export const getLatestPostsByCategoryName = async (category) => {
  const data = await prisma.post.findMany({
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

  return data;
};

export const getPostBySearchValue = async (val) => {
  const data = await prisma.post.findMany({
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

  return data;
};

export const getMostCommentsPosts = async () => {
  const data = await prisma.post.findMany({
    skip: 0,
    take: 12,
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
  return data;
};

export const getMostLikedPosts = async () => {
  const data = await prisma.post.findMany({
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

  return data;
};

export const getPostsByTagId = async (tagId, skip = 0) => {
  const data = await prisma.post.findMany({
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
  return data;
};

export const getTagById = async (tagId) => {
  const data = await prisma.tag.findUnique({
    where: {
      id: tagId,
    },
  });
  return data;
};
