import React from 'react'
import { Center, Box, Image } from "@chakra-ui/react";


const Welcome = () => {
  return (
    <div>
   <Center>
     <Box boxSize="xxl">
      <Image
        src="./src/assets/bodega.jpg"
        alt="bodega"
      />
      </Box>
   </Center>
   </div>
  )
}

export default Welcome