import { styled, Grid } from '@nextui-org/react'

export const MovieCardsSliderWrapper = styled(Grid.Container, {
  justifyContent: 'center',
  '.scroll-container': {
    width: '1000px',
    display: 'flex',
    flexDirection: 'row',
    gap: '15px',
    alignSelf: 'center',
    paddingBottom: '5px',
    '&::-webkit-scrollbar': {
      height: '10px',
    },
    /* Track */
    '&::-webkit-scrollbar-track': {
      background: '#f1f1f1',
      borderRadius: '5px',
    },
    /* Handle */
    '&::-webkit-scrollbar-thumb': {
      background: '#888',
      borderRadius: '5px',
      transition: 'all 0.2s ease-in-out',
    },

    /* Handle on hover */
    '&::-webkit-scrollbar-thumb:hover': {
      background: '#555',
    },
  },
  h3: {
    width: '1000px',
    alignSelf: 'center',
  },
})
