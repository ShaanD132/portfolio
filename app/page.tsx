"use client"
import { Avatar, Box, Container, Flex, Spacer, Heading, chakra, shouldForwardProp, Center, Wrap, Link } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';

const ChakraBox = chakra(motion.div, {
  /**
   * Allow motion props and non-Chakra props to be forwarded.
   */
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

//transition={{ delay: 0.5, ease: "easeIn"}} - TO FIX
export default function Home() {
  return (
    <Container mt={10}>
        <ChakraBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        >
          <Container
          h={255} w = "full"
          rounded='md'
          border="2px"
          borderColor="#7A9CC6"
          >
            <Flex w = "full">
              {/* Element One in Flex*/}

              <Box mt={8}>
                <Heading as ="h1" fontFamily="Outfit Bold" borderBottom="1px" borderColor="#F2AF29">Shaan Dussoye</Heading>
                <Box mt={5} fontFamily="Satoshi" fontSize={18}>
                  Hi! I&apos;m currently a student at HKUST pursuing a BEng in Computer Science. Currently working part-time as a full-stack developer at <Link display="inline-block" fontFamily="Satoshi" fontSize={18} href="https://www.instagram.com/fivson_/" target="_blank" color="rose" textDecoration="underline">Fivson.</Link>
                </Box>
              </Box>


              <Spacer/>

              {/* Element Two in Flex*/}
              <Container>
                <Center h = {275}>
                  <Avatar name = "Shaan Dussoye" src="/images/me.jpeg" h="8rem" w="auto"/>
                </Center>
              </Container>
            </Flex>
          </Container>
        </ChakraBox>
    </Container>
  )
}
