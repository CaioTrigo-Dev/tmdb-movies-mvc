import NavBar from "../../components/navBar";
import '../../assets/dashboard.css';
import useMoviesController from "../../controllers/useMoviesController";
import MovieCard from "../../components/MovieCard";
import '../../assets/movieCard.css';
import Search from "../../components/Search";
import useSearchController from "../../controllers/useSearchController";

export default function Dashboard(){
    const {movies, loading, error, total_Pages, prevPage, nextPage, currentPage} = useMoviesController();
    const {search, setSearch, isSearch, filterMovies} = useSearchController(movies);

    const moviesToShow = isSearch ? filterMovies : movies;
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
                <div className="moviePagination-container">
                    {currentPage === 1 ? '' : <button 
                    onClick={prevPage}
                    className="btn-prev"
                    >Anterior</button>}
                    <div className="pagination">
                        {`Página ${currentPage} de ${total_Pages}`}
                    </div>
                    {currentPage === total_Pages ? '' : <button 
                    onClick={nextPage} 
                    className="btn-next"
                    >Próximo</button>}
                </div>
            </div>
        </main>
    )
}