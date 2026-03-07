import {renderHook, waitFor, } from '@testing-library/react';
import useMoviesController from '../controllers/useMoviesController';
import { getPopularMovies } from '../services/tmdbAPI';

jest.mock('../services/tmdbAPI');

describe('useMoviesController', ()=>{

    beforeAll(()=>{
        jest.spyOn(console,'error').mockImplementation(()=>{});
    })

    afterAll(()=>{
        console.error.mockRestore();
    })

    test('Testando Loading da tela e o resultado da API', async ()=> {

        const mockMovies = {
            results: [{id: 1, title: 'batman'}], 
            total_pages: 5
        };
        
        getPopularMovies.mockResolvedValue(mockMovies);
        
        const {result} = renderHook(()=> useMoviesController());
        expect(result.current.loading).toBe(true);

        await waitFor(()=>{
            expect(result.current.movies).toEqual(mockMovies.results);
        })
    });

    test('Error no retorno da API', async ()=>{

        getPopularMovies.mockRejectedValue(new Error('Error de Conexão'));

        const {result} = renderHook(()=> useMoviesController());

        await waitFor(()=>{
            
            expect(result.current.error).toBe('Não foi Possivel Carregar os Filmes. Tente Novamente');
        })

        expect(result.current.loading).toBe(false);
        expect(console.error).toHaveBeenCalled();
    })
})