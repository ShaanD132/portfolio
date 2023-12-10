import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* Outfit Bold */
      @font-face {
        font-family: 'Outfit Bold';
        src: url('./fonts/Outfit-Bold.ttf') format('truetype');
      }

      /* Outfit Regular */
      @font-face {
        font-family: 'Outfit';
        src: url('./fonts/Outfit-Regular.ttf') format('truetype');
      }

      /* Satoshi */
      @font-face {
        font-family: 'Satoshi';
        src: url('./fonts/Satoshi-Medium.otf') format('opentype');
      }
      `}
  />
)

export default Fonts