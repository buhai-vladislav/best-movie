import React from 'react'
import { Grid, Loading } from '@nextui-org/react'

export const Preloader = () => {
  return (
    <Grid.Container
      css={{ minHeight: '550px' }}
      alignContent="center"
      justify="center"
    >
      <Grid>
        <Loading size="xl" />
      </Grid>
    </Grid.Container>
  )
}
