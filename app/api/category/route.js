import { getCategories } from "@/_lib/data-service";
import { NextResponse } from "next/server";

export async function GET() {


        const data = await getCategories();
        // const data = await res.json();
        console.log("cat:::::::", data);

        return NextResponse({ data })

}