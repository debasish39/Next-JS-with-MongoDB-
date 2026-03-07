import Link from "next/link";
import connectDB from "../../../lib/connectDB";
import PostModel from "../../models/Post";
import { notFound } from "next/navigation";

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage({ params }: PostPageProps) {
  // ✅ unwrap params
  const { id } = await params;

  const postId = Number(id);

  if (!Number.isInteger(postId)) {
    notFound();
  }

  await connectDB();

  const post = await PostModel.findOne({ postId });

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">
      <article className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-md">
        <Link href="/" className="text-red-600 hover:underline">
          ← Back to posts
        </Link>

        <h1 className="text-4xl font-bold mt-4">{post.title}</h1>
        <p className="text-gray-500 mt-2">
          {new Date(post.date).toDateString()}
        </p>

        <div className="mt-6">
          <p>{post.content}</p>
        </div>
      </article>
    </div>
  );
}