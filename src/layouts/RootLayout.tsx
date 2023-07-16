import React from 'react'
import { Outlet } from 'react-router-dom'
import { Grid } from '@nextui-org/react'
import { Header } from '../components/Header'

export default function RootLayout() {
  return (
    <Grid.Container
      alignContent="center"
      justify="center"
      css={{ height: '100%', width: '100%' }}
    >
      <Header />
      <Outlet />
    </Grid.Container>
  )
}
