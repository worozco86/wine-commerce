import React, { useContext } from 'react';
import { CartContext } from "../context/ShoppingCartContext";
import { Table, Thead, Tbody, Tr, Th, Td, Center, Text, Heading, Button, Box, Image } from '@chakra-ui/react'


const Cart = () => {
  const [cart, setCart, addItemToCart] = useContext(CartContext);

  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });
    return totalPrice;
  };

  

  if (cart.length === 0) {
    return <Center>
      <img className='imgCart'src="https://www.distritomoda.com.ar/sites/all/themes/omega_btob/images/carrito_vacio_nuevo.png" alt="Girl in a jacket"/>
      </Center>
  }

  return (
    <>
    <Box bg="blue">
    <Center>
    <Heading bg="blue" color="white" size='xl' center>
    SU CARRITO
    </Heading>
    </Center>
    </Box>
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Nombre</Th>
          <Th>Cantidad</Th>
          <Th>Precio</Th>
          <Th>Total</Th>
        </Tr>
      </Thead>
      <Tbody>
        {cart.map((item) => {
          return (
          <Tr key={item.id}>
            <Td>
            <Text fontWeight="semibold">{item.name}</Text>
              <Text fontSize="sm" color="gray.500">
                {item.description}
              </Text>
            </Td>
            <Td>
              <Text>
                {item.quantity}
              </Text>
            </Td>
            <Td>${item.price}</Td>
            <Td>${item.quantity * item.price}</Td>
          </Tr>
        )})}
      </Tbody>
    </Table>
    <Center>
    <Heading>Total=${getTotalPrice()}</Heading>
    </Center>
    <Center>
    <Button>Comprar</Button>
    </Center>
    </>
  );
};

export default Cart;
