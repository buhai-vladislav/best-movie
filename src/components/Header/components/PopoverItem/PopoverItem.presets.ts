import { styled } from '@nextui-org/react'
import { Link } from 'react-router-dom'

export const PopoverItemWrapper = styled(Link, {
  display: 'flex',
  flexDirection: 'column',
  padding: '5px 10px',
  transition: 'all 0.2s ease-in-out',
  border: 'none',
  background: 'none',
  alignItems: 'flex-start',
  width: '400px',
  '.popover-item-title': {
    color: '#000',
  },
  '&:hover': {
    backgroundColor: '#EDF0F2',
  },
  '.nextui-badge': {
    border: 'none',
  },
  '.badge-wrapper': {
    gap: '2px',
    display: 'flex',
    flexDirection: 'row',
  },
})
