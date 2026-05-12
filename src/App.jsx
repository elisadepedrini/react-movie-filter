import { useEffect, useState } from "react";
import { list_film } from "./data/app_data";

function App() {
  const [genre, setGenre] = useState("");
  const [film, setFilm] = useState([]);
  const [search, setSearch] = useState([])
  const [newFilm, setNewFilm] = useState({})
  const [newGenre, setNewGenre] = useState({})

  
  useEffect(() => {
    let filteredFilm = list_film

    if (genre === "") {
      setFilm(list_film);
    } else {
      filteredFilm = list_film.filter((singleFilm) => {
        return singleFilm.genre === genre;
      });
    }
    
    if(search) {
      filteredFilm = filteredFilm.filter((singleFilm) => {
        return singleFilm.title.includes(search)})
    }

    setFilm(filteredFilm);

  }, [genre, search]);


  function handleAdd(e) {
    console.log(newFilm, newGenre);
    
    e.preventDefault()
    setFilm ([...list_film, {title: newFilm, genre: newGenre}])
  }

  return (
    <>
      <header>
        <h1>ELI'S FILM</h1>
      </header>

      <main>

        {/* INPUT TITLE */}
          <input type="text" value={search} placeholder="Inserisci il titolo del film" onChange={() => setSearch(event.target.value)}/>

        {/* INPUT GENRE */}
        <select
          className="form-select w-25 mx-auto mb-5" value={genre}
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


        <form className="m-5" onSubmit={handleAdd}>
          <label className="form-label">Nome film</label>
          <input type="text" name="name" className="form-control w-50" placeholder="Inserisci il nome del film che vuoi aggiungere" onChange={e => setNewFilm(e.target.value)}/>
          <input type="text" name="name" className="form-control w-50" placeholder="Inserisci il genere del film che vuoi aggiungere" onChange={e => setNewGenre(e.target.value)}/>
          <div className="mt-3 text-center">
            <button type="onSubmit" className="btn btn-dark w-25">Aggiungi</button>
          </div>
          
        </form>
        
      </main>
    </>
  );
}

export default App;
