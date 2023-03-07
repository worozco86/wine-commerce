import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
  } from "@chakra-ui/react";
  import { useParams } from "react-router-dom";
  
  const ItemDetail = ({ item }) => {
    console.log(item)
    const { id } = useParams();
    const itemId = parseInt(id);
    if (!item) return null;
    
  
    return (
      <>
          <Center>
          <Card maxW='sm' key={item.id} className="card-main">
            <CardBody>
                <Image borderRadius="lg" src={item.img} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{item.name}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Descripcion: {item.description}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Categoria: {item.category}
                  </Text>
                  <Text color="red.600" fontSize="xl">
                    Stock: {item.stock}
                  </Text>
                  <Text color="green.600" fontSize="xl">
                    Precio: {item.price}
                  </Text>
                </Stack>
              </CardBody>
          </Card>
          </Center>
      </>
    );
  };
  
  export default ItemDetail;
  