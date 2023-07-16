import React, { useState } from 'react'
import { Table, Button, Grid, Text, Tooltip } from '@nextui-org/react'
import { FavoriteWrapper } from './Favorite.presets'
import { getChoosedMovies, removeChoosedMovie } from '../../utils/utils'
import { RemoveIcon } from '../../assets/RemoveIcon'
import { OpenIcon } from '../../assets/OpenIcon'
import { useNavigate } from 'react-router-dom'

import type { IMovie } from '../../types/Movie'
import { ROWS_PER_PAGE } from '../../utils/constants'

export const Favorite = () => {
  const [movies, setMovies] = useState<Array<Partial<IMovie>>>(
    getChoosedMovies(),
  )
  const navigate = useNavigate()

  const removeHandler = (id: number | undefined): void => {
    if (id) {
      removeChoosedMovie(id)
      setMovies((prev) => prev.filter((item) => item.id !== id))
    }
  }

  const navigateHandler = (id: number | undefined): void => {
    if (id) {
      navigate(`/movie/${id}`)
    }
  }

  const columns = [
    {
      key: 'name',
      label: 'NAME',
    },
    {
      key: 'action',
      label: 'ACTIONS',
    },
  ]

  const items = movies.map((item) => ({
    key: `${item.id}`,
    name: item.title,
    action: (
      <div className="actions">
        <Tooltip content="Open movie">
          <Button
            auto
            onPress={() => {
              navigateHandler(item.id)
            }}
            color="primary"
            className="open-icon"
            icon={<OpenIcon />}
          />
        </Tooltip>
        <Tooltip content="Remove movie from the favorite">
          <Button
            onPress={() => {
              removeHandler(item.id)
            }}
            auto
            color="error"
            icon={<RemoveIcon />}
          />
        </Tooltip>
      </div>
    ),
  }))

  if (movies.length === 0) {
    return (
      <Grid.Container
        css={{ minHeight: '550px' }}
        alignContent="center"
        justify="center"
      >
        <Grid>
          <Text h2>Favorite list is empty...</Text>
        </Grid>
      </Grid.Container>
    )
  }

  return (
    <FavoriteWrapper justify="center" alignContent="center">
      <Table
        aria-label="Table with dynamic content"
        css={{
          height: 'auto',
        }}
        lined
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column key={column.key}>{column.label}</Table.Column>
          )}
        </Table.Header>
        <Table.Body items={items}>
          {(item: any) => (
            <Table.Row key={item.key}>
              {(columnKey: any) => <Table.Cell>{item[columnKey]}</Table.Cell>}
            </Table.Row>
          )}
        </Table.Body>
        <Table.Pagination shadow align="center" rowsPerPage={ROWS_PER_PAGE} />
      </Table>
    </FavoriteWrapper>
  )
}
