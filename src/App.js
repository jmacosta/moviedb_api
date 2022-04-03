import './App.css';
import data from "./mostpopular.json"
import MovieCard from "./components/movieCard.jsx";

function App() {
  return (
    <div>
      <header>

      </header>

      <section id="popularMovies" >
        <div>
          <h2>Películas Populares</h2>
        </div>
        <div className= "popularMovies">
            {data.results.map((movie)=>(<MovieCard key= {movie.id} {...movie} /> ))}
        </div>
      </section>    
      <aside>
        {/* detalles de la pelicula elegida */}
      </aside>
    </div>
  );
}
 
export default App;
