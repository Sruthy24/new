import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-black text-white shadow">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          href="/"
          className="text-2xl font-bold"
        >
          Next Blog
        </Link>

        <span className="text-sm text-gray-300">
          Next.js 15
        </span>

      </div>

    </nav>
  );
}
