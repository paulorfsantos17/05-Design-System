import type { StoryObj, Meta } from '@storybook/react'

import { Box, Text, TextArea, TextAreaProps } from '@prfs-ignite-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  args: {
    placeholder: 'Add any Observations...',
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text>Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {}
export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
