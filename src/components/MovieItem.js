import Image from "next/image";

export default function MovieItem({ movie, index, handleRemove }) {
  return (
    <div className="flex flex-row justify-between bg-gray-100 rounded-sm py-2 px-4">
      <p className="text-lg">{movie.title}</p>
      <div className="flex flex-row gap-4 items-center">
        {Array(movie.rating)
          .fill(null)
          .map((_, i) => {
            return (
              <Image
                src="/star.png"
                alt="star"
                key={i}
                width="20"
                height="20"
              />
            );
          })}

        <Image
          src="/delete.png"
          alt="star"
          width="30"
          height="30"
          className="cursor-pointer"
          onClick={() => handleRemove(index)}
        />
      </div>
    </div>
  );
}
