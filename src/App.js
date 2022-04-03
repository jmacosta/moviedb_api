import './App.css';
import data from "./mostpopular.json"
import MovieCard from "./components/movieCard.jsx";

function App() {
  return (
    <div>
      <ul>  
        {data.results.map((movie)=>(
         <li key={movie.id}>
           <ul>
           {/*<li><img src={'https://image.tmdb.org/t/p/w185'+ movie.poster_path}  alt={movie.title} /></li>*/}
           <MovieCard movie/>
           <li>{movie.title} </li>
           <li>{movie.release_date}</li>
           </ul>

         </li>
         
        ))}
       
      </ul>
      <aside>
        {/* detalles de la pelicula elegida */}
      </aside>
    </div>
  );
}
 
export default App;
