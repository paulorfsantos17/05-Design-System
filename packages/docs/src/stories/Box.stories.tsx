import type { StoryObj, Meta } from '@storybook/react'

import { Box, BoxProps, Text } from '@prfs-ignite-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: (
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, iusto,
        nihil itaque iste tempore
      </Text>
    ),
  },
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
