import React from 'react'
import CartWidget from './CartWidget'
import { Image } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Box className='boxCentral'>
    <Flex minWidth='max-content' alignItems='center' gap='2'>
    <Image borderRadius='full' boxSize='100px' m={1} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjokwD3jLXgINL-QhCit_To0GMrrdp4TGvmw&usqp=CAU' alt='Cup'/>
    <Box p='2'>               
    <Heading color="white" size='xl'> <Link to={"/"}>
    Wine-Store</Link></Heading>
    </Box>
    <Spacer />
    <Menu>
      <Link to="/catalogo">
    <Button>
    <Link to={"/catalogo"}>Catalogo</Link>
    </Button>
    </Link>
    </Menu>
    <Menu>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
      Categorias
    </MenuButton>
    <MenuList>
    <Link to={"/Categorias/TINTOS"}>
      <MenuItem>TINTOS</MenuItem>
    </Link>
    <Link to={"/Categorias/BLANCOS"}>
      <MenuItem>BLANCOS</MenuItem>
    </Link>
    <Link to={"/Categorias/VARIETALES"}>
      <MenuItem>VARIETALES</MenuItem>
    </Link>
    </MenuList>
    </Menu>
    <Spacer />
    <Box>
        <Link to={"/cart"}>
          <CartWidget />
          </Link>
    </Box>
    </Flex>
    </Box>
  )
}

export default NavBar