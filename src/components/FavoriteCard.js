
export default function FavoriteCard({movie, onRemove}){
    const imageBaseUrl = "https://image.tmdb.org/t/p/w500";
    return(
        <div className="movie-card">
            <img 
            src={`${imageBaseUrl}${movie.poster_path}`}
            alt={movie.title}/>

            <div className="movie-info">
                <h3>{movie.title}</h3>
                <span>⭐ {movie.vote_average.toFixed(1)}</span>
            </div>
            <button onClick={()=> onRemove(movie.id)} className="btn-favorite">⭐ Tirar</button>
        </div>
    )
}