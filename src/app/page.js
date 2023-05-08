"use client";

import MovieForm from "@/components/MovieForm";
import MovieList from "@/components/MovieList";

export default function Home() {
  const handleSubmit = () => {};

  return (
    <div className="container mx-auto w-[40%]">
      <h1 className="text-4xl py-3">Min filmlista</h1>
      <h2 className="text-xl">Lägg till en film</h2>
      <hr />
      <MovieForm handleSubmit={handleSubmit} />
      <MovieList />
    </div>
  );
}
