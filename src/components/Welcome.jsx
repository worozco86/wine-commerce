import React from 'react'
import { Center, Box, Image } from "@chakra-ui/react";


const Welcome = () => {
  return (
  <Box className="boxWelcome">
   <Center>
     
      <Image 
        boxSize="750px"
        src="./src/assets/bodega.jpg"
        alt="bodega"
      />
      </Center>
      </Box>
   
 
  )
}

export default Welcome