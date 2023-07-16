import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { MovieCardsSliderWrapper } from './MovieCardsSlider.presets'
import { MovieCard } from '../../../Card/MovieCard'
import { Text } from '@nextui-org/react'

import type { IMovieCardsSliderProps } from './MovieCardsSlider.props'
import type { FC } from 'react'

export const MovieCardsSlider: FC<IMovieCardsSliderProps> = ({
  data,
  title,
}) => {
  return (
    <MovieCardsSliderWrapper direction="column">
      <Text h3>{title}</Text>
      <ScrollContainer
        vertical={false}
        horizontal
        hideScrollbars={false}
        className="scroll-container"
      >
        {data.map((item) => (
          <MovieCard data={item} key={item.id} />
        ))}
      </ScrollContainer>
    </MovieCardsSliderWrapper>
  )
}
