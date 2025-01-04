import Tag from "@/models/Tag";
import { dbConnect } from "@/utils/mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  await dbConnect();
  try {
    const tagFound = await Tag.findById(params.id);

    if (!tagFound)
      return NextResponse.json(
        {
          message: "Tag not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(tagFound);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function PUT(request, { params }) {
  const body = await request.json();
  await dbConnect();

  try {
    const tagUpdated = await Tag.findByIdAndUpdate(params.id, body, {
      new: true,
    });

    if (!tagUpdated)
      return NextResponse.json(
        {
          message: "Tag not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(tagUpdated);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}

export async function DELETE(request, { params }) {
  await dbConnect();

  try {
    const tagDeleted = await Tag.findByIdAndDelete(params.id);

    if (!tagDeleted)
      return NextResponse.json(
        {
          message: "Tag not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(tagDeleted);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}