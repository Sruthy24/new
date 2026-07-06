import { getPost } from "@/lib/getPosts";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  try {
    const post = await getPost(params.id);

    return {
      title: post.title,
      description: post.body.slice(0, 150),
      openGraph: {
        title: post.title,
        description: post.body.slice(0, 150),
        type: "article",
      },
    };
  } catch {
    return {
      title: "Blog Not Found",
    };
  }
}

export default async function BlogPage({ params }) {
  let post;

  try {
    post = await getPost(params.id);
  } catch {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-10">

      <Link
        href="/"
        className="text-blue-600 hover:underline"
      >
        ← Back to Home
      </Link>

      <article className="mt-8">

        <h1 className="text-5xl font-bold text-slate-800 leading-tight">
          {post.title}
        </h1>

        <div className="mt-4 text-gray-500 text-sm">
          Blog ID: {post.id}
        </div>

        <div className="mt-8 border-t pt-8">

          <p className="text-lg leading-9 text-gray-700 whitespace-pre-line">
            {post.body}
          </p>

        </div>

      </article>

    </main>
  );
}
