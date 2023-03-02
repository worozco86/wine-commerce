import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Heading, Text, Button, ButtonGroup } from '@chakra-ui/react'


const Item = ({id, name, category, price, stock }) => {
  return (
    <div key={id}>
     <Card maxW='sm'>
      <CardBody>
        <Image
         src={img}
         alt='wines'
         borderRadius='lg'
    />
        <Stack mt='6' spacing='3'>
        <Heading size='md'>{name}</Heading>
        <Text>Descripcion: {description}</Text>
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
        Detalles
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>
</div>
  )
}
export default Item