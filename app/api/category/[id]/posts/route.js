import Category from "@/models/Category";
import { dbConnect } from "@/utils/mongoose";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  
  await dbConnect();
  try {
    const categoryFound = await Category.findById(params.id)
    
    if (!categoryFound)
      return NextResponse.json(
        {
          message: "Category not found",
        },
        {
          status: 404,
        }
      );

    return NextResponse.json(categoryFound);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400,
    });
  }
}