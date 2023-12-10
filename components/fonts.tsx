import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={`
      /* Outfit Bold */
      @font-face {
        font-family: 'Outfit Bold';
        src: url('../public/fonts/Outfit-Bold.ttf') format('truetype');
      }

      /* Satoshi */
      @font-face {
        font-family: 'S1DK';
        src: url('../public/fonts/Outfit-Bold.ttf') format('truetype');
      }
      `}
  />
)

export default Fonts