import { extendTheme, useColorModeValue } from "@chakra-ui/react";
import type { StyleFunctionProps } from '@chakra-ui/styled-system'
import {mode} from "@chakra-ui/theme-tools"


const styles = {
  global: (props: StyleFunctionProps) => ({
    body: {
      bg: mode("#0A1828", "#2A3439")(props),
      color: "#F7FFF7"
    }
  })
}

const components = {
  Heading: {
    variants: {
      "section-title": {
        textDecoration: "underline",
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: "#525252",
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4,
      }
    }
  },
  Link: {
    baseStyle: (props: StyleFunctionProps) => ({
      textUnderlineOffset: 3,
    })
  }
}

const fonts = {
  heading: "'Outfit Bold'",
}

const colors = {
  blue: "#0A1828",
  white: "#F7FFF7",
  rose: "#F03781"
}

const config = {
  initialColorMode: "light",
  useSystemColorMode: false
}

export const theme = extendTheme({
  config, styles, components, colors, fonts
})
