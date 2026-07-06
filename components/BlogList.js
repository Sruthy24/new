"use client";

import { useMemo, useState } from "react";
import SearchBar from "./SearchBar";
import BlogCard from "./BlogCard";

export default function BlogList({ posts }) {
  const [search, setSearch] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [posts, search]);

  return (
    <>
      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {filteredPosts.length === 0 ? (
        <div className="text-center text-gray-500 mt-12">
          No blog posts found.
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
            />
          ))}
        </div>
      )}
    </>
  );
}
