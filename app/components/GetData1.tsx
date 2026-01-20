type Post = {
  _id: string;
  title: string;
  content: string;
  date: string;
};

async function getData(): Promise<Post[]> {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data = await res.json();
  return data.results;
}

export default async function Home() {
  const posts = await getData();

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
        Posts
      </h1>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div
            key={post._id}
            className="rounded-lg bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <h2 className="mb-2 text-xl font-semibold text-red-600">
              {post.title}
            </h2>

            <p className="mb-4 text-gray-700 line-clamp-4">
              {post.content}
            </p>

            <small className="text-sm text-gray-500">
              {new Date(post.date).toDateString()}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}
