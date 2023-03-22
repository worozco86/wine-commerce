import { useContext, useState } from "react";
import {
  ButtonGroup,
  IconButton,
  Tooltip,
  Center,
  Button,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { CartContext } from "../context/ShoppingCartContext";

const ItemCount = ({ stock, id, price, name, img }) => {
  const [count, setCount] = useState(1);
  const [cart, setCart] = useContext(CartContext);

  const addQty = () => {
    setCount(count + 1);
  };

  const substractQty = () => {
    setCount(count - 1);
  };

  const addToCart = () => {
    if (count > 0) {
      const newItem = {
        img: img,
        id: id,
        name: name,
        price: price,
        quantity: count,
      };
  
      const itemIndex = cart.findIndex((item) => item.id === newItem.id);
      if (itemIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[itemIndex].quantity += count;
        setCart(updatedCart);
      } else {
        setCart([...cart, newItem]);
      }
    }
  };

  return (
    <>
      <Center>
        <ButtonGroup size="md" variant="outline">
          {count < 1 ? (
            <Tooltip label="minimum stock reached" placement="bottom">
              <IconButton
                colorScheme="red"
                icon={<MinusIcon />}
                isDisabled
              />
            </Tooltip>
          ) : (
            <IconButton icon={<MinusIcon />} onClick={substractQty} />
          )}
          <Center>
            <Button
              onClick={() => addToCart()}
              variant="solid"
              colorScheme="blue"
            >
              Añadir al Carrito: {count}
            </Button>
          </Center>
          {count < stock ? (
            <IconButton
              colorScheme="green"
              icon={<AddIcon />}
              onClick={addQty}
            />
          ) : (
            <Tooltip label="stock limit reached" placement="bottom">
              <IconButton icon={<AddIcon />} isDisabled />
            </Tooltip>
          )}
        </ButtonGroup>
      </Center>
    </>
  );
};

export default ItemCount;