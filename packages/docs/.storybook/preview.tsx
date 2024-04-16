import type { Preview } from "@storybook/react";

import { themes } from '@storybook/theming'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: themes.dark
    },
    docs: {
      theme: themes.dark
    }
  },
};

export default preview;
