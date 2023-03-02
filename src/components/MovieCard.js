import "./MovieCard.css";

function MovieCard({ movie }) {
  const { name, img_link, genre, imdb_rating, duration } = movie;

  return (
    <div className="bg-slate-600 w-[18rem] rounded shadow-[2px_2px_2px_2px_rgba(0, 0, 0, 0.8)]">
      <div className="w-full h-[20rem] ">
        <img
          src={img_link}
          alt="card"
          className="w-full h-full object-contain card-img"
        />
      </div>
      <div className="flex flex-col gap-2 p-1 text-[#e2e8f0]">
        <div>
          <span className="text-xl">{name}</span>
        </div>
        <div>
          <span>{genre}</span>
        </div>
        <div className="flex justify-between">
          <span>{imdb_rating}</span>
          <span>{duration} mins</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
