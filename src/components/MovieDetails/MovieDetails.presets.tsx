import { Grid, styled } from '@nextui-org/react'

export const MovieDetailsWrapper = styled(Grid.Container, {
  paddingTop: '40px',
  img: {
    borderRadius: '14px',
  },
  '.bold': {
    fontWeight: 700,
  },
  '.overview-wrapper': {
    maxW: '600px',
    marginBottom: '10px',
  },
  '.rating': {
    width: '40px',
    height: '20px',
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
  '.title-wrapper': {
    display: 'flex',
    svg: {
      marginLeft: '10px',
      width: '30px',
      height: 'auto',
    },
  },
})
