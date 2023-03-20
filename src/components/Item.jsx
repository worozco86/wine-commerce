import React from 'react'
import { Card, Divider, CardBody, CardFooter, Image, Stack, Heading, Text, Button, ButtonGroup, Center} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const Item = ({id, name, category, price, stock, img}) => {
  return (
    <div key={id}>
     <Center>
     <Card align='center' maxW='sm'>
      <CardBody>
        <Image
         src={img}
         alt='wines'
         borderRadius='lg'
    />
        <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
        <Text>Categoria: {category}</Text>
        <Text color='red.600'>Stock: {stock}</Text>
        <Text color='blue.600' fontSize='2xl'>
        Precio: {price}
        </Text>
        </Stack>
        </CardBody>
       <Divider />
       <CardFooter>
       <ButtonGroup spacing='2'>
       <Button variant='solid' colorScheme='blue'>
        <Link to={`/Item/${id}`}>Detalles</Link>
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</Center>

</div>
  )
}
export default Item