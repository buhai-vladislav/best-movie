import { styled, Navbar } from '@nextui-org/react'

export const NavbarWrapper = styled(Navbar, {
  '.nextui-input-main-container': {
    width: '400px',
  },
  '.trigger': {
    position: 'absolute',
    bottom: '30px',
    width: '400px',
    height: '1px',
  },
  '.logo': {
    width: '25px',
    height: '25px',
    marginRight: '10px',
  },
  '.link': {
    display: 'flex',
    color: '#000',
    fontWeight: '700',
  },
  '.favorite-link': {
    fontWeight: '600',
    a: {
      color: '#000',
    },
  },
})
