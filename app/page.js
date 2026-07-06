import Navbar from "@/components/Navbar";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import { getPosts } from "@/lib/getPosts";

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-10">
        <section className="text-center mb-10">
         <h1 className="text-4xl md:text-5xl font-bold text-slate-800">
            Welcome to Next Blog
          </h1>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Discover the latest articles, tutorials, and insights about
            web development, React, and Next.js.
          </p>
        </section>

        <BlogList posts={posts} />
      </main>

      <Footer />
    </>
  );
}
