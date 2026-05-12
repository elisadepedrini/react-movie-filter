import { list_film } from "./data/app_data";

function App() {

  return (
    <>
      <header>
        <h1>ELI'S FILM</h1>
      </header>

      <main>
        {/* INPUT */}
        <select className="form-select w-25 mx-auto mb-5" id="floatingSelectGrid">
          <option>Quale genere di film vuoi guardare oggi?</option>
          <option >Fantascienza</option>
          <option >Thriller</option>
          <option >Romantico</option>
          <option >Azione</option>
        </select>
        

        {/* CARD FILM */}
        <div className="d-flex justify-content-around">
          {list_film.map((film, index) => (
            <div className="card text-start" key={index}>
              <div className="card-body">
                <h4 className="card-title">{film.title}</h4>
                <p className="card-text">{film.genre}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
