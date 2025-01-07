import Post from "@/models/Post";
import { dbConnect } from "@/utils/mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  await dbConnect();
  try {
    const postFound = await Post.findById(params.id);

    if (!postFound)
      return NextResponse.json(
        {
          message: "Post not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(postFound);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}