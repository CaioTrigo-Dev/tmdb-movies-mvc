import axios from "axios";
import { getPopularMovies } from "../services/tmdbAPI";


jest.mock("axios", () => {
  const mockAxiosInstance = {
    get: jest.fn(),
  };
  return {
    create: jest.fn(() => mockAxiosInstance),
    __mockInstance: mockAxiosInstance,
  };
});


const mockApi = axios.__mockInstance;

describe("getPopularMovies", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("deve retornar os dados de filmes populares", async () => {
    const mockData = {
      page: 1,
      results: [
        { id: 1, title: "Filme A" },
        { id: 2, title: "Filme B" },
      ],
      total_pages: 10,
    };

    mockApi.get.mockResolvedValue({ data: mockData });

    const result = await getPopularMovies(1);

    expect(mockApi.get).toHaveBeenCalledWith("/movie/popular", {
      params: { page: 1 },
    });
    expect(result).toEqual(mockData);
  });

  test('Se está recebendo Paginação correta', async ()=> {
    mockApi.get.mockResolvedValue({data: {page: 3, results: []}});

    await getPopularMovies(3);
    expect(mockApi.get).toHaveBeenCalledWith("/movie/popular", {
        params: {page: 3}
    });
  })
})