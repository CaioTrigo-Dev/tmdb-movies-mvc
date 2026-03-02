import {renderHook} from '@testing-library/react';
import useDetailsController from '../controllers/useDetailsController';
import useMoviesController from '../controllers/useMoviesController';

jest.mock('../controllers/useMoviesController');

describe('Teste Detalhes do Filmes', ()=>{

    test('Descrição do Filme', ()=>{
        const mockMovies = [
            {id: 1, title: 'Matrix'},
            {id: 2, title: 'Carros'}
        ]

        useMoviesController.mockReturnValue({movies: mockMovies});

        const {result} = renderHook(()=> { 
            return useDetailsController({id: '1'})
        });


        expect(result.current.detailsMovie).toEqual([{id: 1, title: 'Matrix'}]);
    });

    test('Passa String sem ser número', ()=>{
        const mockID = {id: 'Caio'};
        const mockMovies = [
            {id: 1, title: 'Matrix'},
            {id: 2, title: 'Carros'}
        ]

        useMoviesController.mockReturnValue({movies: mockMovies});

        const {result} = renderHook(()=>{
            return useDetailsController(mockID)
        })

        expect(result.current.detailsMovie).toEqual([]);
    })
})