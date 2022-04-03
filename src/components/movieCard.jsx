import React, {useState} from 'react';


function MovieCard(movie){

const[movies,setmovies] = useState(['https://image.tmdb.org/t/p/w185/A4jt7Gqa7dRT2ZIo3hNHc4esw3d.jpg'])
return(
    <div>
        <img src={movie} alt="Movies" />
        

    </div>
);
}

export default MovieCard;