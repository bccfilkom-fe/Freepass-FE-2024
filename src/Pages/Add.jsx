import { useState } from "react";
import { searchMovie } from "../api-util.JS";
import ResultCard from "../component/ResultCard.jsx";

const Add = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = async (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    const search = await searchMovie(e.target.value);
    if (!search.errors) {
      setResult(search);
    } else {
      setResult([]);
    }

    console.log(result);
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search a Movie"
              value={query}
              onChange={handleChange}
            />
          </div>

          <ul className="mt-4">
            {result.map((movie) => (
              <li key={movie.id}>
                <ResultCard movie={movie}></ResultCard>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Add;
