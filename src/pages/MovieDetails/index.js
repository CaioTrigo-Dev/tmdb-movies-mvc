import { useParams } from "react-router-dom"
import useDetailsController from "../../controllers/useDetailsController";
import NavBar from "../../components/navBar";
import MovieDetails from "../../components/DetailsCard";

export default function Details(){

    const id = useParams();
    const {detailsMovie} = useDetailsController(id);

    return(
        <main>
            <NavBar/>
                <div className="dashboard-container">
                    <MovieDetails detailsMovie={detailsMovie}/>
                </div>
        </main>
    )
}