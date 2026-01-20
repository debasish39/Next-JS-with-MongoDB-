import { NextResponse } from "next/server";
import connectDB from "../../../../lib/connectDB";
import PostModel from "../../../models/Post";

export async function GET(request, context) {
  try {
    const { id } = await context.params; // "1"

    await connectDB();

    const post = await PostModel.findOne({
      postId: Number(id),
    });

    if (!post) {
      return NextResponse.json(
        { message: "Post not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { results: post },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error fetching post", error: error.message },
      { status: 500 }
    );
  }
}

export async function PUT(request,context){
    try{
        const {id}=await context.params;
        const body=await request.json();
        await connectDB();
        const updatePost=await PostModel.findOneAndUpdate(
            {
                postId:Number(id)
            },
            {
                title:body.title,
                content:body.content,
            },
        {new:true}
        );
        if(!updatePost){
            return NextResponse.json({message:"Post not found"}, { status: 404 });
        }
        return NextResponse.json(
            {results:updatePost},
            {status:200}
        );
    }
    catch(error){
        return NextResponse.json(
            {message:"Error updating post", error: error.message},
            {status:500}
        );
    }
}
export async function DELETE(request,context){
    try{
        const {id}=await context.params;
        await connectDB();
        const deletePost=await PostModel.findOneAndDelete(
            {
                postId:Number(id)
            }
        );
        if(!deletePost){
            return NextResponse.json({message:"Post not found"}, { status: 404 });
        }
        return NextResponse.json(
            {results:deletePost},
            {status:200}
        );
    }catch(error){
        return NextResponse.json({message:"Error deleting post", error: error.message}, { status: 500 });
    }
}