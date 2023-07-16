import { styled, Grid } from '@nextui-org/react'

export const FavoriteWrapper = styled(Grid.Container, {
  paddingTop: '40px',
  width: '500px !important',
  '.nextui-table-container': {
    width: '100%',
  },
  svg: {
    width: '15px',
    height: '15px',
    fill: '#fff',
  },
  '.open-icon': {
    svg: {
      fill: 'none',
      stroke: '#fff',
      width: '20px',
      height: '20px',
    },
  },
  '.actions': {
    display: 'flex',
    gap: '10px',
  },
  '.nextui-table-cell': {
    whiteSpace: 'normal',
  },
})
