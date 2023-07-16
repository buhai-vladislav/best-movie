import { IGenre } from './Genre'

export interface IMovie {
  poster_path: string
  adult: boolean
  overview: string
  release_date: string
  genre_ids: number[]
  id: number
  original_title: string
  original_language: string
  title: string
  backdrop_path: string
  popularity: number
  vote_count: number
  video: boolean
  vote_average: number
}

export interface IGetMovies {
  page: number
  results: IMovie[]
  total_results: number
  total_pages: number
}

export interface IProductionCompany {
  id: number
  logo_path: string
  name: string
  origin_country: string
}

export interface IProductionCountry {
  iso_3166_1: string
  name: string
}

export interface ISpokenLanguage {
  iso_639_1: string
  name: string
}

export interface IMovieDetails extends Partial<IMovie> {
  belongs_to_collection?: any
  budget: number
  genres: IGenre[]
  homepage: string
  imdb_id: string
  poster_path?: any
  production_companies: IProductionCompany[]
  production_countries: IProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: ISpokenLanguage[]
  status: string
  tagline: string
}

export interface ISearchMovies extends IGetMovies {}
