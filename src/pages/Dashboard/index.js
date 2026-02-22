import NavBar from "../../components/navBar";
import '../../assets/dashboard.css';
import useMoviesController from "../../controllers/useMoviesController";
import MovieCard from "../../components/MovieCard";
import '../../assets/movieCard.css';

export default function Dashboard(){

    const {movies, loading, error} = useMoviesController();

    return(
        <main className="main-dashboard">
            <NavBar/>
            <div className="dashboard-container">
                {loading && <p>Carregando Filmes...</p>}
                {error && <p style={{color: 'red'}}>{error}</p>}
                <div className="movies-grid">
                    {!loading && movies.map((movie)=> (
                        <MovieCard key={movie.id} movie={movie}/>
                    ))}
                </div>
            </div>
        </main>
    )
}