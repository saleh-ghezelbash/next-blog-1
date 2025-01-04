import Tag from "@/models/Tag";
import { dbConnect } from "@/utils/mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  await dbConnect();
  const tags = await Tag.find();
  return NextResponse.json(tags);
}

export async function POST(request) {
  try {
    const body = await request.json();
    const newTag = new Tag(body);
    const savedTag = await newTag.save();
    return NextResponse.json(savedTag);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}