
import useMoviesController from "./useMoviesController"


export default function useDetailsController({id}){
    const NumberID= Number(id);
    const {movies} = useMoviesController();
    

    const detailsMovie = movies.filter(movie => movie.id === NumberID);
    console.log(detailsMovie);
    return{
        detailsMovie
    }
}