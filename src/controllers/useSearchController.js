import { useState } from "react"


export default function useSearchController(movie){
    const [search, setSearch] = useState('');

    const filterMovies = movie ? movie.filter((movie) => 
        movie.title.toLowerCase().includes(search.toLowerCase())
    ) : [];

    const isSearch = search.length > 0 ;
    return{
        search,
        setSearch,
        isSearch,
        filterMovies
    }
}