import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ product }) => {
  return (
    <>
      <Container>
        {product?.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            stock={product.stock}
            category={product.category}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;