import { createStitches, defaultThemeMap } from '@stitches/react'
import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radii,
  space,
} from '@prfs-ignite-ui/tokens'

export const { styled, css, globalCss, keyframes, getCssText, theme } =
  createStitches({
    theme: { colors, fontSizes, fontWeights, fonts, lineHeights, radii, space },
    themeMap: {
      ...defaultThemeMap,
      height: 'space',
      width: 'space',
    },
  })
