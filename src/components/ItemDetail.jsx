import {
    Center,
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    CardFooter,
    Divider,
  } from "@chakra-ui/react";
  import { useParams } from "react-router-dom";

  const ItemDetail = ({ items }) => {
    const { id } = useParams();
    console.log(id)
  
    const itemFilter = items.filter((item) => item.id == id);
  
    return (
      <>
        {itemFilter.map((item) => (
          <div key={item.id}>
            <Center p="1rem">
              <Card className="card-main">
                <CardBody>
                  <Image borderRadius="lg" src={item.image} />
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
                <Divider />
              </Card>
            </Center>
          </div>
        ))}
      </>
    );
  };
  
  export default ItemDetail;