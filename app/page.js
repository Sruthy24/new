import Navbar from "@/components/Navbar";
import BlogList from "@/components/BlogList";
import { getPosts } from "@/lib/getPosts";

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <Navbar />

      <main className="max-w-6xl mx-auto p-6">

        <h1 className="text-4xl font-bold mb-8">
          Latest Blogs
        </h1>

        <BlogList posts={posts} />

      </main>
    </>
  );
}
