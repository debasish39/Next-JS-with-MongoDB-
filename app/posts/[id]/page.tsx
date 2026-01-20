import Link from "next/link";
import connectDB from "../../../lib/connectDB";
import PostModel from "../../models/Post";
import notFound from "../../not-found";

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export default async function PostPage(context: PostPageProps) {
  // ✅ unwrap params FIRST
  const { id } = await context.params;

  // ✅ convert & validate
  const postId = Number(id);
  if (!Number.isInteger(postId)) {
    notFound();
  }

  await connectDB();

  // ✅ safe query
  const post = await PostModel.findOne({ postId });

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12">
      <article className="mx-auto max-w-3xl rounded-2xl bg-white p-8 shadow-md">
        <Link
          href="/"
          className="mb-6 inline-block text-sm font-medium text-red-600 hover:underline"
        >
          ← Back to posts
        </Link>

        <h1 className="mb-4 text-4xl font-extrabold text-slate-800">
          {post.title}
        </h1>

        <div className="mb-8 flex items-center gap-4 text-sm text-slate-500">
          <span>{new Date(post.date).toDateString()}</span>
          <span className="h-1 w-1 rounded-full bg-slate-400" />
          <span>Post #{post.postId}</span>
        </div>

        <div className="prose max-w-none prose-slate">
          <p className="whitespace-pre-line leading-relaxed">
            {post.content}
          </p>
        </div>
      </article>
    </div>
  );
}