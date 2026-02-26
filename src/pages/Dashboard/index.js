import NavBar from "../../components/navBar";
import '../../assets/dashboard.css';
import useMoviesController from "../../controllers/useMoviesController";
import MovieCard from "../../components/MovieCard";
import '../../assets/movieCard.css';
import Search from "../../components/Search";
import useSearchController from "../../controllers/useSearchController";

export default function Dashboard(){

    const {movies, loading, error} = useMoviesController();
    const {search, setSearch, isSearch, filterMovies} = useSearchController(movies);

    const moviesToShow = isSearch ? filterMovies : movies
    console.log(moviesToShow);
    return(
        <main className="main-dashboard">
            <NavBar/>
            <div className="dashboard-container">
                <Search search={search} setSearch={setSearch}/>
                {loading && <p>Carregando Filmes...</p>}
                {error && <p style={{color: 'red'}}>{error}</p>}
                <div className="movies-grid">
                {moviesToShow.length > 0 ? (
                        moviesToShow.map(movie => (
                            <MovieCard key={movie.id} movie={movie} />
                        ))
                    ) : (
                        <p className="no-results">Nenhum filme encontrado para "{search}"</p>
                    )}
                </div>
            </div>
        </main>
    )
}