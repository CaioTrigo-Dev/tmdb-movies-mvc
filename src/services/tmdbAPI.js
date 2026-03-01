import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params:{
        api_key: process.env.REACT_APP_TMDB_KEY,
        language: 'pt-BR'
    }
});

export const getPopularMovies = async (page)=>{
    const response = await api.get('/movie/popular', {
        params: { page }
    });
    return response.data;

}

export default api;