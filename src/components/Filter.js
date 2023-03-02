import { useState } from "react";

const Filter = ({ onFilterSubmit }) => {
  const [titleFilter, setTitleFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onFilterSubmit({ title: titleFilter, rating: ratingFilter });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex m-3 justify-between items-center gap-4 text-[#e2e8f0] fixed"
    >
      <div className="flex gap-2">
        <label htmlFor="titleFilter">Title:</label>
        <input
          type="text"
          id="titleFilter"
          value={titleFilter}
          className="text-[#0f172a] rounded"
          onChange={(event) => setTitleFilter(event.target.value)}
        />
      </div>
      <div className="flex gap-2">
        <label htmlFor="ratingFilter">Minimum rating:</label>
        <input
          type="number"
          id="ratingFilter"
          min="0"
          max="10"
          className="text-[#0f172a] rounded"
          value={ratingFilter}
          onChange={(event) => setRatingFilter(event.target.value)}
        />
      </div>
      <button type="submit" className="bg-[#e2e8f0] text-[#0f172a] rounded p-1">
        Filter
      </button>
    </form>
  );
};

export default Filter;
