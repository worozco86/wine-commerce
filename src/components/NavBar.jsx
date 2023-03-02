import React from 'react'
import CartWidget from './CartWidget'
import { Image } from '@chakra-ui/react'
import ItemListConteiner from './ItemListConteiner'
import { Flex, Spacer } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'





const NavBar = () => {
  return (
    <Box className='boxCentral'>
    <Flex minWidth='max-content' alignItems='center' gap='2'>
    <Image borderRadius='full' boxSize='100px' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjokwD3jLXgINL-QhCit_To0GMrrdp4TGvmw&usqp=CAU' alt='Cup'/>
    <Box p='2'>               
    <Heading size='md'>Mi-Ecommerce</Heading>
    </Box>
    <Spacer />
    <Menu>
    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
    Categorias
    </MenuButton>
    <MenuList>
    <MenuItem>TINTOS</MenuItem>
    <MenuItem>BLANCOS</MenuItem>
    <MenuItem>VARIETALES</MenuItem>
    </MenuList>
    </Menu>
    <Spacer />
    <CartWidget/>
    </Flex>
    </Box>
  )
}

export default NavBar