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

      <div className="hidden md:flex gap-6 text-sm text-gray-300">

    <Link href="/">
        Home
    </Link>

    <span>
        Blogs
    </span>

</div>

      </div>

    </nav>
  );
}
