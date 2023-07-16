import { styled, Grid } from '@nextui-org/react'

export const MovieCardWrapper = styled(Grid, {
  img: {
    borderRadius: '14px',
  },
  '.nextui-badge-root': {
    position: 'absolute',
  },
  '.nextui-badge': {
    border: 'none',
  },
  '.title': {
    fontWeight: 500,
  },
  button: {
    position: 'absolute',
    right: '12px',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
  },
})
