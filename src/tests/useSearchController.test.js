import { renderHook, act } from "@testing-library/react";
import useSearchController from "../controllers/useSearchController";

describe('useSearchController',()=>{

    test('Busca de um filme e retornar ele', ()=>{
        const mockMovies = [
            {id: 1, title: 'Matrix'},
            {id: 2, title: 'Carros'}
        ]
        const {result} = renderHook(()=> useSearchController(mockMovies));
        act(()=>{
            result.current.setSearch('Ma');
        })
        
        expect(result.current.search).toBe('Ma');
        expect(result.current.filterMovies).toContainEqual({id: 1, title: 'Matrix'});
    });

    test('Filme não foi encontrado', ()=>{
        const mockMovies = [
            {id: 1, title: 'Matrix'},
            {id: 2, title: 'Carros'}
        ]

        const {result} = renderHook(()=> useSearchController(mockMovies));

        act(()=>{
            result.current.setSearch('Shrek');
        });

        expect(result.current.filterMovies).toEqual([]);
    });

    test('Quantidade de filme encontrado retorna false', ()=> {
        const mockMovies = [
            {id: 1, title: 'Matrix'},
            {id: 2, title: 'Carros'}
        ]

        const {result} = renderHook(()=> useSearchController(mockMovies));

        act(()=>{
            result.current.setSearch('');
        })

        expect(result.current.isSearch).toBe(false);
    });

    test('Quantidade de filme encontrado retorna true', ()=>{
        const mockMovies = [
            {id: 1, title: 'Matrix'},
            {id: 2, title: 'Carros'}
        ]

        const {result} = renderHook(()=> useSearchController(mockMovies));

        act(()=>{
            result.current.setSearch('Matri');
        });

        expect(result.current.isSearch).toBe(true);
    });
})