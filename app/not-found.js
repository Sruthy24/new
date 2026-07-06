import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-5xl font-bold">
        404
      </h1>

      <p className="text-gray-600">
        Blog post not found.
      </p>

      <Link
        href="/"
        className="bg-black text-white px-5 py-3 rounded-lg"
      >
        Back Home
      </Link>
    </main>
  );
}
