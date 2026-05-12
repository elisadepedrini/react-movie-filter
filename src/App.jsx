import { useEffect, useState } from "react";
import { list_film } from "./data/app_data";

function App() {
  const [genre, setGenre] = useState("");
  const [film, setFilm] = useState([]);

  useEffect(() => {
    
    if (genre === "") {
      setFilm(list_film);
    } else {
      const filteredFilm = list_film.filter((singleFilm) => {
        return singleFilm.genre === genre;
      });
      setFilm(filteredFilm);
    }

  }, [genre]);

  return (
    <>
      <header>
        <h1>ELI'S FILM</h1>
      </header>

      <main>
        {/* INPUT */}
        <select
          className="form-select w-25 mx-auto mb-5"
          onChange={() => setGenre(event.target.value)}
        >
          <option value="">Quale genere di film vuoi guardare oggi?</option>
          <option value="Fantascienza">Fantascienza</option>
          <option value="Thriller">Thriller</option>
          <option value="Romantico">Romantico</option>
          <option value="Azione">Azione</option>
        </select>

        {/* CARD FILM */}
        <div className="d-flex justify-content-around">
          {film.map((singleFilm, index) => (
            <div className="card text-start" key={index}>
              <div className="card-body">
                <h4 className="card-title">{singleFilm.title}</h4>
                <p className="card-text">{singleFilm.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
