import { getPost } from "@/lib/getPosts";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const post = await getPost(params.id);

  return {
    title: post.title,
    description: post.body,
  };
}

export default async function BlogPage({ params }) {
  const post = await getPost(params.id);

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">
      <Link
        href="/"
        className="text-blue-600 hover:underline"
      >
        ← Back to Home
      </Link>

      <article className="mt-8 bg-white rounded-xl shadow-md p-8">
        <h1 className="text-4xl font-bold mb-6">
          {post.title}
        </h1>

        <p className="text-gray-700 leading-8 whitespace-pre-line">
          {post.body}
        </p>
      </article>
    </main>
  );
}
