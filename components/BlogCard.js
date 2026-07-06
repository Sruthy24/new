import Link from "next/link";

export default function BlogCard({ post }) {
  return (
    <article className="rounded-2xl border bg-white shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">

      <div className="p-6">

        <h2 className="text-2xl font-bold text-slate-800">
          {post.title}
        </h2>

        <p className="mt-4 text-gray-600 line-clamp-4 leading-7">
          {post.body}
        </p>

        <Link
          href={`/blog/${post.id}`}
          className="inline-block mt-6 text-blue-600 font-semibold hover:underline"
        >
          Read More →
        </Link>

      </div>

    </article>
  );
}
