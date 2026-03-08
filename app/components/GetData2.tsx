import Link from "next/link";
import connectDB from "../../lib/connectDB";
import PostModel from "../models/Post";
export const dynamic = "force-dynamic";
export const revalidate = 0;
export const fetchCache = "force-no-store";
export default async function Home() {
  await connectDB();
  const allPosts = await PostModel.find({}).sort({ postId: -1 });

  return (
    <div className="min-h-screen px-6 py-12">
      <h1 className="mb-10 text-center text-4xl font-extrabold text-slate-800">
        Posts
      </h1>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {allPosts.map((post) => (
          <article
            key={post.postId.toString()}
            className="rounded-2xl border shadow-sm p-6"
          >
            <h2 className="mb-3 text-xl font-semibold">
              {post.title}
            </h2>

            <p className="mb-6 text-slate-600 line-clamp-4">
              {post.content}
            </p>

            <div className="flex justify-between text-sm text-slate-500">
              <span>{new Date(post.date).toDateString()}</span>
              <p>Post ID: {post.postId}</p>
              {/* ✅ GET BY ID LINK */}
              <Link
               href={`/posts/${post.postId}`}
                className="text-red-600 hover:underline"
              >
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
