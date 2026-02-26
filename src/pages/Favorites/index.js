import FavoriteCard from "../../components/FavoriteCard";
import NavBar from "../../components/navBar";
import { useFavoriteController } from "../../controllers/useFavoriteController";
import '../../assets/favorites.css';

export default function Favorites(){
    const {myFavorites, removeFavorite} = useFavoriteController();
    return(
        <main>
            <NavBar/>
            <div className="dashboard-container">
                <h1 className="text-favorite">Meus Favoritos</h1>
                    <div className="movies-grid">
                        {myFavorites.length === 0 && <p>Você ainda não tem favoritos.</p>}
                        
                        {myFavorites.map(movie => (
                            <FavoriteCard 
                                key={movie.id} 
                                movie={movie} 
                                onRemove={removeFavorite} 
                            />
                        ))}
                    </div>
            </div>
        </main>
    )
}