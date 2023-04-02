import React, { useContext } from 'react';
import { CartContext } from "../context/ShoppingCartContext";
import { Table, Thead, Tbody, Tr, Th, Td, Center, Text, Heading, Button, Box } from '@chakra-ui/react'
import Swal from "sweetalert2"


const Cart = () => {
  const [cart, setCart, addItemToCart] = useContext(CartContext);

  const mostrarMensaje = () => {
    Swal.fire({
    position: 'top-center',
    icon: 'success',
    title: 'Muchas gracias por su compra!!!',
    showConfirmButton: false,
    timer: 1500})
  }

  const getTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((item) => {
      totalPrice += item.quantity * item.price;
    });
    return totalPrice;
  };

  const limpiarCarrito = () => {
    setCart([]);
  }

  const eliminarUnidad = (itemId) => {
    const itemIndex = cart.findIndex(item => item.id === itemId);
    const newCart = [...cart];
    if (newCart[itemIndex].quantity === 1) {
      newCart.splice(itemIndex, 1);
    } else {
      newCart[itemIndex].quantity--;
    }
    setCart(newCart);
  }

  if (cart.length === 0) {
    return <Center>
      <img className='imgCart'src="https://www.distritomoda.com.ar/sites/all/themes/omega_btob/images/carrito_vacio_nuevo.png" alt="Girl in a jacket"/>
      </Center>
  }

  return (
    <>
    <Box bg="blue">
    <Center>
    <Heading bg="blue" color="white" size='xl'>
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
          <Th></Th>
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
            <Td>
              <Button colorScheme='purple' size='sm' variant='outline' onClick={() => eliminarUnidad(item.id)}>ELIMINAR</Button>
            </Td>
          </Tr>
        )})}
      </Tbody>
    </Table>
    <Box bg="blue" p={3}>
    <Center>
    <Heading bg="blue" color="white" size='xl'>TOTAL= ${getTotalPrice()}</Heading>
    </Center>
    </Box>
    <Center>
    <Button colorScheme='purple' size='lg' variant='solid' m={2} onClick={() => {mostrarMensaje(); limpiarCarrito();}}>COMPRAR</Button>
    </Center>
    
    </>
  );
};

export default Cart;
