import MovieItem from "./MovieItem";

export default function MovieList({ movies }) {
  movies = [
    { title: "Star wars", rating: 4 },
    { title: "Titanic", rating: 2 },
  ];

  return (
    <>
      <h2 className="text-3xl py-2 mt-8">Inlagda filmer</h2>
      <div className="flex flex-col gap-2">
        {movies.map((movie, i) => {
          return <MovieItem key={i} movie={movie} />;
        })}
      </div>
    </>
  );
}
