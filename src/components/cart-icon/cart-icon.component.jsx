import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import { CartIconContainer, Icon, ItemCount } from "./cart-icon.styles.jsx";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <CartIconContainer>
      <Icon>
        <ShopingIcon onClick={toggleIsCartOpen} />
      </Icon>
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
