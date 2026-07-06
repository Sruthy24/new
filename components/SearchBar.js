"use client";

export default function SearchBar({
  search,
  setSearch,
}) {
  return (
    <div className="mb-8">
      <input
        type="search"
        placeholder="Search blog posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-xl border border-gray-300 bg-white p-4 shadow-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
        aria-label="Search blog posts"
      />
    </div>
  );
}
