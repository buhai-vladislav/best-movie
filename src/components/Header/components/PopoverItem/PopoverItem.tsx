import React from 'react'
import { PopoverItemWrapper } from './PopoverItem.presets'

import type { FC } from 'react'
import type { IPopoverItemProps } from './PopoverItem.props'
import { Badge } from '@nextui-org/react'

export const PopoverItem: FC<IPopoverItemProps> = ({
  title,
  genreTitles,
  id,
  onClosePopoverHandler,
}) => {
  return (
    <PopoverItemWrapper to={`/movie/${id}`} onClick={onClosePopoverHandler}>
      <span className="popover-item-title">{title}</span>
      <div className="badge-wrapper">
        {genreTitles.map((genre) => (
          <Badge color="primary" key={genre}>
            {genre}
          </Badge>
        ))}
      </div>
    </PopoverItemWrapper>
  )
}
