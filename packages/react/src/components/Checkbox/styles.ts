import { styled, keyframes } from '../../../styles'
import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckBoxContainer = styled(Checkbox.Root, {
  all: 'unset',
  width: '$6',
  height: '$6',
  backgroundColor: '$gray900',
  borderRadius: '$xs',
  lineHeight: 0,
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid $ignite900',

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },
  '&:focus, &[data-state="checked"]': {
    border: '1px solid $ignite300',
  },
})
const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
})
const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
    opacity: 1,
  },
  to: {
    transform: 'translateY(-100%)',
    opacity: 0,
  },
})

export const CheckBoxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn}  0.2s ease-out`,
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut}  0.2s ease-out`,
  },
})
