import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Filter from "./components/Filter";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(
          "https://movies-app.prakashsakari.repl.co/api/movies"
        );
        setMovies(data);
        setFilteredMovies(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMovies();
  }, []);

  const handleFilterSubmit = ({ title, rating }) => {
    const filteredMovies = movies.filter(
      (movie) =>
        movie.name.toLowerCase().includes(title.toLowerCase()) &&
        movie.imdb_rating >= rating
    );
    setFilteredMovies(filteredMovies);
  };

  return (
    <div>
      <div className="bg-[#0f172a] flex flex-col justify-center items-center gap-4 p-4 fixed w-screen">
        <h1 className="font-bold text-3xl text-[#e2e8f0]">Movies</h1>
      </div>
      <div className="flex">
        <Filter onFilterSubmit={handleFilterSubmit} />
        <MovieList movies={filteredMovies} />
      </div>
    </div>
  );
}

export default App;
