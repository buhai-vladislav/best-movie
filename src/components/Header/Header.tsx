import React, { useEffect, useState } from 'react'
import { Input, Navbar, Text, Popover, Loading } from '@nextui-org/react'
import { NavbarWrapper } from './Header.presets'
import { useDebounce } from '../../hooks/useDebounce'
import {
  useGetGenresQuery,
  useLazySearchMoviesQuery,
} from '../../store/api/main.api'
import { PopoverItem } from './components/PopoverItem'
import { getGanreTitles } from '../../utils/utils'
import { Link } from 'react-router-dom'

import type { ChangeEvent } from 'react'
import type { FormElement } from '@nextui-org/react'

export const Header = () => {
  const [search, setSearch] = useState<string>('')
  const [isPopoverOpened, setPopoverOpened] = useState<boolean>(false)
  const debouncedValue = useDebounce<string>(search, 600)
  const [searchMovies, { data, isLoading }] = useLazySearchMoviesQuery()
  const { data: allGenres } = useGetGenresQuery({})

  const onChangeHandler = ({ target }: ChangeEvent<FormElement>): void => {
    setSearch(target.value)
  }

  const onClosePopoverHandler = (): void => {
    setSearch('')
    setPopoverOpened(false)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    if (debouncedValue.trim() !== '') {
      searchMovies(debouncedValue).catch((error) => {
        console.error(error)
      })
    }
  }, [debouncedValue])

  useEffect(() => {
    if (data !== undefined && data.results.length > 0) {
      setPopoverOpened(true)
    }
  }, [data])

  return (
    <NavbarWrapper variant="sticky">
      <Navbar.Brand>
        <Text b color="inherit">
          <Link className="link" to="/">
            <img
              className="logo"
              src="../movie-film-svgrepo-com.svg"
              alt="BM"
            />
            BestMovie
          </Link>
        </Text>
      </Navbar.Brand>
      <Navbar.Content css={{ position: 'relative' }}>
        <Input
          placeholder="Search a movie..."
          value={search}
          onChange={onChangeHandler}
          contentRight={isLoading ? <Loading size="xs" /> : null}
        />
        <Popover
          isOpen={isPopoverOpened}
          onOpenChange={setPopoverOpened}
          shouldCloseOnBlur={false}
          placement="bottom"
        >
          <Popover.Trigger>
            <div className="trigger" />
          </Popover.Trigger>
          <Popover.Content>
            {data?.results
              .slice(0, 5)
              .map(({ title, id, genre_ids: genreIds }) => (
                <PopoverItem
                  title={title}
                  key={id}
                  id={id}
                  genreTitles={getGanreTitles(
                    allGenres?.genres ?? [],
                    genreIds,
                  )}
                  onClosePopoverHandler={onClosePopoverHandler}
                />
              ))}
          </Popover.Content>
        </Popover>
      </Navbar.Content>
      <Navbar.Content>
        <Text className="favorite-link">
          <Link to="/favorite">Favorite</Link>
        </Text>
      </Navbar.Content>
    </NavbarWrapper>
  )
}
