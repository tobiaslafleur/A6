import MovieItem from "./MovieItem";

export default function MovieList({ movies, setMovies }) {
  const handleAlphabetic = () => {
    const sorted = movies.sort((a, b) => {
      if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
      if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
      return 0;
    });

    setMovies([...sorted]);
  };

  const handleNumeric = () => {
    const sorted = movies.sort((a, b) => b.rating - a.rating);

    setMovies([...sorted]);
  };

  const handleRemove = (i) => {
    const spliced = [...movies];

    spliced.splice(i, 1);

    setMovies([...spliced]);
  };

  return (
    <>
      <h2 className="text-3xl py-2 mt-8">Inlagda filmer</h2>
      <div className="flex flex-col gap-2">
        {movies.map((movie, i) => {
          return (
            <MovieItem
              key={i}
              index={i}
              handleRemove={handleRemove}
              movie={movie}
            />
          );
        })}
      </div>
      <div className="flex gap-4 mt-2">
        <button
          className="bg-blue-500 py-2 px-4 rounded-sm text-white hover:bg-blue-600"
          onClick={handleAlphabetic}
        >
          Alfabetisk ordning
        </button>
        <button
          className="bg-blue-500 py-2 px-4 rounded-sm text-white hover:bg-blue-600"
          onClick={handleNumeric}
        >
          Betygsordning
        </button>
      </div>
    </>
  );
}
