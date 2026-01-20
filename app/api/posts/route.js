import { NextResponse } from "next/server";
import connectDB from "../../../lib/connectDB";
import PostModel from "../../../app/models/Post";
import getNextPostId from "../../../lib/getNextPostId";
export async function GET(request) {
    
    try{
        await connectDB();
        const results= await PostModel.find();
        console.log(results);
  return NextResponse.json({ "results":results},{status:200});
  }
  catch(error){
    console.log(error);
    return NextResponse.json({ message: "Error in GET request to /api/posts",error },{status:500});
  }
}


export async function POST(request) {
  try {
    const body = await request.json();
    await connectDB();

    const postId = await getNextPostId();

    const post = await PostModel.create({
      postId,
      title: body.title,
      content: body.content
    });

    return NextResponse.json(
      { results: post },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error creating post", error },
      { status: 500 }
    );
  }
}