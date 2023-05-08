"use client";

import MovieForm from "@/components/MovieForm";
import MovieList from "@/components/MovieList";
import { useEffect, useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies([
      { title: "Star wars", rating: 4 },
      { title: "Titanic", rating: 2 },
    ]);
  }, []);

  return (
    <div className="container mx-auto w-[40%]">
      <h1 className="text-4xl py-3">Min filmlista</h1>
      <h2 className="text-xl">Lägg till en film</h2>
      <hr />
      <MovieForm setMovies={setMovies} />
      <MovieList movies={movies} setMovies={setMovies} />
    </div>
  );
}
