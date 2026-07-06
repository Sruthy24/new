"use client";

export default function Error({ error, reset }) {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-5">
      <h1 className="text-3xl font-bold text-red-600">
        Something went wrong
      </h1>

      <p className="text-gray-600">
        {error.message}
      </p>

      <button
        onClick={() => reset()}
        className="bg-blue-600 text-white px-5 py-2 rounded-lg"
      >
        Try Again
      </button>
    </main>
  );
}
