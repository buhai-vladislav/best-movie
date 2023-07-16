import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { IGetAllGenres } from '../../types/Genre'
import type {
  IGetMovies,
  IMovieDetails,
  ISearchMovies,
} from '../../types/Movie'

const API_KEY = process.env.REACT_APP_API_KEY

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.themoviedb.org/3',
})

export const mainApi = createApi({
  reducerPath: 'main',
  baseQuery,
  endpoints: (build) => ({
    getMovies: build.query<IGetMovies, number>({
      query: (page) => ({
        url: '/movie/popular',
        method: 'GET',
        params: {
          api_key: API_KEY,
          page,
        },
      }),
    }),
    getGenres: build.query<IGetAllGenres, unknown>({
      query: () => ({
        url: '/genre/movie/list',
        method: 'GET',
        params: {
          api_key: API_KEY,
        },
      }),
    }),
    searchMovies: build.query<ISearchMovies, string>({
      query: (query) => ({
        url: '/search/movie',
        method: 'GET',
        params: {
          api_key: API_KEY,
          query,
        },
      }),
    }),
    getMovieDetails: build.query<IMovieDetails, number>({
      query: (id) => ({
        url: `/movie/${id}`,
        method: 'GET',
        params: {
          api_key: API_KEY,
        },
      }),
    }),
    getRecommenedMovies: build.query<IGetMovies, number>({
      query: (id) => ({
        url: `/movie/${id}/recommendations`,
        method: 'GET',
        params: {
          api_key: API_KEY,
        },
      }),
    }),
    getSimilarMovies: build.query<IGetMovies, number>({
      query: (id) => ({
        url: `/movie/${id}/similar`,
        method: 'GET',
        params: {
          api_key: API_KEY,
        },
      }),
    }),
  }),
})

export const {
  useGetMoviesQuery,
  useGetGenresQuery,
  useLazySearchMoviesQuery,
  useGetMovieDetailsQuery,
  useGetRecommenedMoviesQuery,
  useGetSimilarMoviesQuery,
} = mainApi
