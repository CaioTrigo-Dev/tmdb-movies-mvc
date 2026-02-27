import { Link } from "react-router-dom"; //
import '../assets/detailsCard.css';

export default function MovieDetails({detailsMovie}) {

    const imageBaseUrl = "https://image.tmdb.org/t/p/original";
    const posterBaseUrl = "https://image.tmdb.org/t/p/w500";

    return (
        <div className="details-container">
            {detailsMovie.map((movie)=>(
                <div 
                    className="backdrop-container" 
                    style={{ backgroundImage: `url(${imageBaseUrl}${movie.backdrop_path})` }}
                >
                    <div className="backdrop-overlay">
                        <Link 
                    to="/dashboard" 
                    className="btn-back">
                        <span>Voltar</span>
                    </Link>
                    </div>
                </div>
            ))}

            {detailsMovie.map((movie)=> (
                <div className="details-content">
                    <div className="poster-wrapper">
                        <img 
                            src={`${posterBaseUrl}${movie.poster_path}`} 
                            alt={movie.title} 
                            className="details-poster"
                        />
                    </div>

                    <div className="details-info">
                        <h1>{movie.title}</h1>
                        
                        <div className="meta-info">
                            <span>⭐ {movie.vote_average?.toFixed(1)}</span>
                            <span>📅 {new Date(movie.release_date).getFullYear()}</span>
                        </div>

                        <div className="synopsis">
                            <h2>Sinopse</h2>
                            <p>{movie.overview || "Sinopse não disponível para este filme."}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}