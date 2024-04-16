import type { StoryObj, Meta } from '@storybook/react'

import { Heading, HeadingProps } from '@prfs-ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Custom Title',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl'],
      control: {
        type: 'inline-radio',
      },
    },
    as: {
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}
export const CustomTag: StoryObj<HeadingProps> = {
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre séra um `h2`, mas podemos alterar isso com a propriedade `as`',
      },
    },
  },
  args: {
    children: 'H1 Text',
    as: 'h1',
  },
}
