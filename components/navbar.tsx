"use client"
import React from "react"
import { Box, Container, Flex, Link } from "@chakra-ui/react";


const Navbar:React.FC = () => {
  return(
    <Container mt={7}>
        <Flex fontSize={18} maxW="container-md" color="rose" fontWeight="bold">
          <Link href="/" pr= {5}>Home</Link>
          <Link href="/projects" px= {5}>Projects</Link>
          <Link href="/resume" px= {5}>Resume</Link>
          <Link href="/contact" px= {5}>Contact</Link>
        </Flex>
    </Container>
  )
}

export default Navbar