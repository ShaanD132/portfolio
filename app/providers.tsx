// app/providers.tsx
'use client'

import Navbar from '@/components/navbar'
import { theme } from '@/components/theme'
import { ChakraProvider, Container } from '@chakra-ui/react'
import Fonts from '@/components/fonts'

export function Providers({ children }: { children: React.ReactNode }) {
  return(
    <ChakraProvider theme={theme}>
      <Fonts/>
      <Navbar />
      <Container maxW="container-md">
      {children}
      </Container>
    </ChakraProvider>

  )
}