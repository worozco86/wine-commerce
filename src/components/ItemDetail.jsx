import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    CardFooter
  } from "@chakra-ui/react";

  import ItemCount from "./ItemCount";
  import { useEffect, useState } from "react";
  
  
  const ItemDetail = ({ item }) => {
    
  
    return (
      <>
          <Center>
          <Card align='center' maxW='sm' key={item.id} className="card-main">
            <CardBody>
                <Image borderRadius="lg" src={item.img} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{item.nombre}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Descripcion: {item.descripcion}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Categoria: {item.categoria}
                  </Text>
                  <Text color="red.600" fontSize="xl">
                    Stock: {item.stock}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    Precio: {item.precio}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ItemCount
                  stock={item.stock}
                  id={item.id}
                  price={item.precio}
                  name={item.nombre}
                />
              </CardFooter>
          </Card>
          </Center>
      </>
    );
  };
  
  export default ItemDetail;
  