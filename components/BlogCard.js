import Link from "next/link";

export default function BlogCard({ post }) {

return (

<div className="shadow rounded-xl p-5 hover:shadow-lg transition">

<h2 className="text-xl font-bold">

{post.title}

</h2>

<p className="text-gray-600 mt-3">

{post.body.slice(0,120)}...

</p>

<Link
href={`/blog/${post.id}`}
className="text-blue-500 mt-4 inline-block"
>

Read More →

</Link>

</div>

);

}
