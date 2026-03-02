import { renderHook, act } from "@testing-library/react";
import { useFavoriteController } from "../controllers/useFavoriteController";


describe('UseFavoriteController', ()=> {

    test('Está adicionando no MyFavorite - addFavorite', ()=>{
        const {result} = renderHook(()=> useFavoriteController());

        act(()=>{
            const sucess = result.current.addFavorite({id: 1, title: 'Matrix'});

            expect(sucess).toBe(true);
        })
        expect(result.current.myFavorites).toContainEqual({id: 1, title: 'Matrix'});
    })

    test('não pode ter duplicidade no localStorage - addFavorite',()=>{
        const {result} = renderHook(()=> useFavoriteController());

        act(()=>{
            result.current.addFavorite({id: 1, title: 'Matrix'});
        })

        act(()=>{
            const failure = result.current.addFavorite({id: 1, title: 'Matrix'});

            expect(failure).toBe(false);
        })
        expect(result.current.myFavorites).toContainEqual({id: 1, title: 'Matrix'});
    })

    test('Testando remoção do myFavorite - RemoveFavorite', ()=>{
        const {result} = renderHook(()=> useFavoriteController());
        const movie = {id: 1, title: "Matrix"};
        act(()=>{
            result.current.addFavorite(movie);

            expect(result.current.myFavorites).toContainEqual({id: 1, title: "Matrix"});
        });
        act(()=>{
            result.current.removeFavorite(movie.id);
        })

        expect(result.current.myFavorites).toEqual([]);
    })

    test('Testando o HandleFavoriteToggle adicionando',()=>{
        const {result} = renderHook(()=> useFavoriteController());
        const movie = {id: 1, title: "Matrix"};


        act(()=>{
            result.current.handleFavoriteToggle(movie);
        })

        expect(result.current.myFavorites).toContainEqual(movie);
    })

    test('Testando o HandleFavoriteToggle Apagando do Favorite', ()=>{
        const {result} = renderHook(()=> useFavoriteController());

        const movie = {id: 1, title: "Matrix"};

        act(()=>{
            result.current.handleFavoriteToggle(movie);
        })

        act(()=>{
            result.current.handleFavoriteToggle(movie);
        });

        expect(result.current.myFavorites).toContainEqual(movie);
    })
})