import { useEffect, useState } from "react"
import { getPopularMovies } from "../services/tmdbAPI";

export default function useMoviesController(){
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const fetchMovies = async ()=>{
            try{
                setLoading(true);

                const data = await getPopularMovies();
                console.log(data)
                setMovies(data.results || []);

            }catch(err){
                console.error("Error ao buscar Filmes:", []);
                setError("Não foi Possivel Carregar os Filmes. Tente Novamente");
            }finally{
                setLoading(false);  
            }
        }

        fetchMovies();
    }, [])
    return{movies, loading, error};
}