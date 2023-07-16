import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { Favorite } from '../components/Favorite'
import { MovieDetails } from '../components/MovieDetails'
import { MovieLayout } from '../components/MoviesLayout'
import RootLayout from '../layouts/RootLayout'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <MovieLayout />,
      },
      {
        path: '/movie/:movieId',
        element: <MovieDetails />,
      },
      {
        path: '/favorite',
        element: <Favorite />,
      },
    ],
  },
])
