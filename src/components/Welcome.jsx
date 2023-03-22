import React from 'react'
import { Center, Box, Image, AbsoluteCenter } from "@chakra-ui/react";


const Welcome = () => {
  return (
  <Box w='100%' h='700px'bgImage="https://media.admagazine.com/photos/618a62b169ed46faf86e30ef/master/w_1600%2Cc_limit/81858.jpg" bgPosition="center" bgRepeat="no-repeat">
   <AbsoluteCenter>
      <Image 
        src="./src/assets/bodega.jpg"
        alt="bodega"
        />
  </AbsoluteCenter>
  </Box>
   

  )
}

export default Welcome