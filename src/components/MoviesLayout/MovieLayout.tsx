import React, { useEffect, useState } from 'react'
import { Grid, Pagination } from '@nextui-org/react'
import { useGetMoviesQuery } from '../../store/api/main.api'
import { INITIAL_PAGE } from '../../utils/constants'
import { MovieCard } from '../../components/Card/MovieCard'
import { Preloader } from '../../shared'

export const MovieLayout = () => {
  const [page, setPage] = useState(INITIAL_PAGE)
  const { data, isLoading } = useGetMoviesQuery(page)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [page])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <Grid.Container
      gap={2}
      alignContent="center"
      justify="center"
      css={{ maxW: '800px' }}
    >
      {data?.results.map((item) => (
        <MovieCard key={item.id} data={item} />
      ))}
      <Pagination
        total={data?.total_pages}
        initialPage={INITIAL_PAGE}
        page={page}
        shadow
        onChange={(page: number) => {
          setPage(page)
        }}
      />
    </Grid.Container>
  )
}
