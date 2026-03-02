import { useEffect, useState } from "react"
import { getPopularMovies } from "../services/tmdbAPI";

export default function useMoviesController(){
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [total_Pages, setTotal_Pages] = useState('');

    useEffect(()=>{
        const fetchMovies = async ()=>{
            try{
                setLoading(true);

                const data = await getPopularMovies(currentPage);
                setTotal_Pages(data.total_pages);
                setMovies(data.results || []);

            }catch(err){
                console.error("Error ao buscar Filmes:", []);
                setError("Não foi Possivel Carregar os Filmes. Tente Novamente");
            }finally{
                setLoading(false);  
            }
        }

        fetchMovies();
    }, [currentPage])

    const nextPage = ()=>{
        if(currentPage < total_Pages){
            setCurrentPage(prev => prev + 1);
        }
    }

    const prevPage = () => {
        if(currentPage > - 1 ){
            setCurrentPage(prev => prev - 1);
        }
    }
    return{
        movies, 
        loading, 
        error, 
        currentPage, 
        total_Pages, 
        prevPage, 
        nextPage
    };
}