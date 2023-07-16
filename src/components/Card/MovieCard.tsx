import React, { useState, useEffect } from 'react'
import { Card, Text, Badge, Image } from '@nextui-org/react'
import { MovieCardWrapper } from './MovieCard.presets'
import { CARD_POSTER_SIZE } from '../../utils/constants'
import { StarFilledIcon } from '../../assets/StarFilledIcon'
import { StarUnfilledIcon } from '../../assets/StarUnFilledIcon'
import {
  addChoosedMovie,
  removeChoosedMovie,
  isChoosedMovie,
  getImageLink,
} from '../../utils/utils'

import type { IMovieCardProps } from './MovieCard.props'
import type { FC } from 'react'
import { Link } from 'react-router-dom'

export const MovieCard: FC<IMovieCardProps> = ({ data }) => {
  const [isChoosed, setIsChoosed] = useState<boolean>(false)
  const { title, id, vote_average: voteAverage, poster_path: posterPath } = data

  const toChoosedHandler = () => {
    setIsChoosed(true)
    addChoosedMovie(id, title)
  }

  const removeFromChoosedHandler = () => {
    setIsChoosed(false)
    removeChoosedMovie(id)
  }

  const scrollToTopHandler = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    const isFilled = isChoosedMovie(id)
    if (isFilled) {
      setIsChoosed(true)
    }
  }, [])

  return (
    <MovieCardWrapper xs={3}>
      <Card isHoverable variant="flat">
        <Card.Body>
          <Image
            width={150}
            height={220}
            showSkeleton
            src={getImageLink(posterPath, CARD_POSTER_SIZE)}
          />
          <Link to={`/movie/${id}`} onClick={scrollToTopHandler}>
            <Text className="title">{title}</Text>
          </Link>
          <Badge color="primary" size="md">
            Rating: {voteAverage.toFixed(1)}
          </Badge>
          {isChoosed ? (
            <button onClick={removeFromChoosedHandler}>
              <StarFilledIcon />
            </button>
          ) : (
            <button onClick={toChoosedHandler}>
              <StarUnfilledIcon />
            </button>
          )}
        </Card.Body>
      </Card>
    </MovieCardWrapper>
  )
}
