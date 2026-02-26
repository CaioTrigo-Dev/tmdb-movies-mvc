import { useState,useEffect } from "react";

    export function useFavoriteController(){
        
        const [myFavorites, setMyFavorites] = useState(()=>{
            const saved = localStorage.getItem("@myFavorite");
            return saved ? JSON.parse(saved) : [];
        })
        useEffect(()=>{
            localStorage.setItem("@myFavorite", JSON.stringify(myFavorites));
        }, [myFavorites]);

        const checkIsFavorite = (id) => myFavorites.some(fav => fav.id === id);

        const addFavorite = (newMovie)=>{
            if(checkIsFavorite(newMovie.id)) return false;

            setMyFavorites(prev =>[...prev, newMovie]);
            return true;
        }

        const removeFavorite = (id) =>{
            setMyFavorites(prev => prev.filter(item => item.id !== id));
        }

        const handleFavoriteToggle = (movie)=>{
            if(checkIsFavorite(movie.id)){
                removeFavorite(movie.id);
            }
            else{
                addFavorite(movie);
            }
        }
        return{
            myFavorites,
            checkIsFavorite,
            handleFavoriteToggle,
            removeFavorite
        }
    }
