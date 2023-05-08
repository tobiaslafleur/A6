"use client";

import MovieForm from "@/components/MovieForm";

export default function Home() {
  const handleSubmit = () => {};

  return (
    <div className="container mx-auto">
      <MovieForm handleSubmit={handleSubmit} />
    </div>
  );
}
