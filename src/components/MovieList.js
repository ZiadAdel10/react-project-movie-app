import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="flex gap-6 flex-wrap justify-center pt-[8rem] pr-[2rem] pb-[2rem] pl-[3rem]">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
