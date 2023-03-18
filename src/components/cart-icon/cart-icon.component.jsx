import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import { ReactComponent as ShopingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container">
      <ShopingIcon className="shopping-icon" onClick={toggleIsCartOpen} />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
