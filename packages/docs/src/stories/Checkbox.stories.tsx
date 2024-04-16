import type { StoryObj, Meta } from '@storybook/react'

import { Box, CheckBox, CheckBoxProps, Text } from '@ignite-ui/react'

export default {
  title: 'Form/CheckBox',
  component: CheckBox,
  decorators: [
    (Storie) => {
      return (
        <Box as="label" css={{ display: 'flex', gap: '$2' }}>
          {Storie()}
          <Text>Accept terms of use </Text>
        </Box>
      )
    },
  ],
} as Meta<CheckBoxProps>

export const Primary: StoryObj<CheckBoxProps> = {}
