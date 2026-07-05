import { getPost } from "@/lib/getPosts";
import Link from "next/link";

export default async function Blog({ params }) {

  const post = await getPost(params.id);

  return (

    <div className="max-w-3xl mx-auto p-10">

      <Link
        href="/"
        className="text-blue-500"
      >
        ← Back
      </Link>

      <h1 className="text-4xl font-bold mt-8">
        {post.title}
      </h1>

      <p className="mt-5 text-gray-600">
        {post.body}
      </p>

    </div>

  );

}
