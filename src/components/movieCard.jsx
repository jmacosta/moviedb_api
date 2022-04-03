import React, {useState} from 'react';


function MovieCard(props){



return(
    <div>
        <img src={'https://image.tmdb.org/t/p/w185'+ props.poster_path} alt={props.title} />
=
    </div>
);
}

export default MovieCard;
