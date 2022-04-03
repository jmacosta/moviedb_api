


function MovieCard(props){



return(
    <div className="movieCard">
        <div>
            <img src={'https://image.tmdb.org/t/p/w185'+ props.poster_path} alt={props.title} />
        </div>
        <div> 
            <h2>{props.title} </h2>
            {props.release_date}
        </div>

    </div>    
);
}

export default MovieCard;
