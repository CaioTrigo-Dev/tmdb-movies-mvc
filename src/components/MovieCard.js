import { useFavoriteController } from "../controllers/useFavoriteController";



export default function MovieCard({movie}){

    const { checkIsFavorite, handleFavoriteToggle} = useFavoriteController();
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
            <button onClick={()=> handleFavoriteToggle(movie)} className="btn-favorite">{checkIsFavorite(movie.id) ? "⭐ Tirar" : "Favoritar"}</button>
        </div>
        
    )
}