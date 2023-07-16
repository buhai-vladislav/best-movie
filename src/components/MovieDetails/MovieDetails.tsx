import React, { useEffect, useState } from 'react'
import { MovieDetailsWrapper } from './MovieDetails.presets'
import { useParams } from 'react-router-dom'
import {
  useGetMovieDetailsQuery,
  useGetRecommenedMoviesQuery,
  useGetSimilarMoviesQuery,
} from '../../store/api/main.api'
import { Badge, Grid, Image, Text } from '@nextui-org/react'
import { CARD_POSTER_SIZE } from '../../utils/constants'
import {
  addChoosedMovie,
  getFilmRuntime,
  removeChoosedMovie,
  isChoosedMovie,
  getImageLink,
} from '../../utils/utils'
import { StarFilledIcon } from '../../assets/StarFilledIcon'
import { StarUnfilledIcon } from '../../assets/StarUnFilledIcon'
import { MovieCardsSlider } from './components/MovieCardsSlider'
import { Preloader } from '../../shared'

export const MovieDetails = () => {
  const { movieId } = useParams()
  const parsedMovieId = Number.parseInt(movieId ?? '', 10)
  const [isChoosed, setIsChoosed] = useState<boolean>(false)
  const { data, isLoading } = useGetMovieDetailsQuery(parsedMovieId)
  const { data: recommened } = useGetRecommenedMoviesQuery(parsedMovieId)
  const { data: similar } = useGetSimilarMoviesQuery(parsedMovieId)

  const toChoosedHandler = () => {
    if (data?.id && data?.title) {
      setIsChoosed(true)
      addChoosedMovie(data.id, data.title)
    }
  }

  const removeFromChoosedHandler = () => {
    if (data?.id) {
      setIsChoosed(false)
      removeChoosedMovie(data.id)
    }
  }

  useEffect(() => {
    if (data?.id) {
      const isFilled = isChoosedMovie(data.id)
      if (isFilled) {
        setIsChoosed(true)
      }
    }
  }, [data])

  if (isLoading) {
    return <Preloader />
  }

  const getMoneyString = (value: number | undefined): string => {
    const unknownString = 'unknown'
    if (!value) {
      return unknownString
    }
    const resultString = value > 0 ? `${value}$` : unknownString
    return resultString
  }

  return (
    <MovieDetailsWrapper gap={2} alignContent="center" justify="center">
      <Grid xs={3}>
        {data && (
          <Image
            src={getImageLink(data?.poster_path, CARD_POSTER_SIZE)}
            width={220}
            height={330}
            showSkeleton
          />
        )}
      </Grid>
      <Grid xs={9}>
        <div>
          <div className="title-wrapper">
            <Text h2>{data?.title}</Text>
            {isChoosed ? (
              <button onClick={removeFromChoosedHandler}>
                <StarFilledIcon />
              </button>
            ) : (
              <button onClick={toChoosedHandler}>
                <StarUnfilledIcon />
              </button>
            )}
            <Badge
              enableShadow
              disableOutline
              color="primary"
              className="rating"
            >
              {data?.vote_average?.toFixed(1)}
            </Badge>
          </div>
          <Text>
            <span className="bold">Duration: </span>
            {data?.runtime && getFilmRuntime(data?.runtime)}
          </Text>
          <Text className="overview-wrapper">
            <span className="bold">Overview: </span>
            {data?.overview}
          </Text>
          <Text>
            <span className="bold">Release date: </span>
            {data?.release_date}
          </Text>
          <Text>
            <span className="bold">Budget: </span>
            {getMoneyString(data?.budget)}
          </Text>
          <Text>
            <span className="bold">Revenue: </span>
            {getMoneyString(data?.revenue)}
          </Text>
          {data?.genres.map(({ name, id }) => (
            <Badge color="primary" key={id}>
              {name}
            </Badge>
          ))}
        </div>
      </Grid>
      <Grid xs={12} justify="center" direction="column">
        {recommened?.results && recommened.results.length > 0 && (
          <MovieCardsSlider
            title="Recommened films:"
            data={recommened?.results}
          />
        )}
      </Grid>
      <Grid xs={12} justify="center" direction="column">
        {similar?.results && similar.results.length > 0 && (
          <MovieCardsSlider title="Similar films:" data={similar?.results} />
        )}
      </Grid>
    </MovieDetailsWrapper>
  )
}
