import type { IGenre } from '../types/Genre'
import type { IMovie } from '../types/Movie'
import {
  ELEMENT_NOT_FOUND,
  HOUR_IN_MINUTES,
  POSTER_INITIAL_URL,
} from './constants'

const CHOOSED_MOVIES_LS_KEY = 'choosed_movies'

export const getGanreTitles = (
  genres: IGenre[],
  genresIds: number[],
): string[] => {
  const resultArray: string[] = []

  genresIds.forEach((genre) => {
    const index = genres.findIndex((item) => item.id === genre)

    if (index !== ELEMENT_NOT_FOUND) {
      resultArray.push(genres[index].name)
    }
  })
  return resultArray
}

export const addChoosedMovie = (id: number, title: string): void => {
  const movies: Array<Partial<IMovie>> = getChoosedMovies()

  movies.push({ id, title })
  localStorage.setItem(CHOOSED_MOVIES_LS_KEY, JSON.stringify(movies))
}

export const removeChoosedMovie = (id: number): void => {
  const movies: Array<Partial<IMovie>> = getChoosedMovies()

  const filtered = movies.filter((item) => item.id !== id)
  localStorage.setItem(CHOOSED_MOVIES_LS_KEY, JSON.stringify(filtered))
}

export const getChoosedMovies = (): Array<Partial<IMovie>> => {
  const lsString = localStorage.getItem(CHOOSED_MOVIES_LS_KEY)
  const movies: Array<Partial<IMovie>> = JSON.parse(lsString ?? '[]')
  return movies
}

export const isChoosedMovie = (id: number): boolean => {
  const movies: Array<Partial<IMovie>> = getChoosedMovies()
  const index = movies.findIndex((item) => item.id === id)

  return index !== ELEMENT_NOT_FOUND
}

export const getFilmRuntime = (runtime: number): string => {
  const hours = Math.floor(runtime / HOUR_IN_MINUTES)
  const minutes = runtime - hours * HOUR_IN_MINUTES

  if (hours === 0) {
    return `${minutes}m`
  }

  return `${hours}h ${minutes}m`
}

export const getImageLink = (
  imageUrl: string | undefined | null,
  size: string,
): string => {
  if (imageUrl === null || imageUrl === undefined) {
    return '../movie-film-svgrepo-com.svg'
  }

  return `${POSTER_INITIAL_URL}${size}${imageUrl}`
}
