import IconButton from "@mui/material/IconButton";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";

const Cart = ({ cartData }) => {
  // console.log("cart data: ", cartData);
  return (
    <div className="cart">
      <header>CART ITEMS</header>
      {cartData.map((cartItem, index) => {
        return (
          <div className="cart__item" key={index}>
            <span>{cartItem.itemName}</span>
            <span className="cart-qty-section">
              <IconButton color="primary">
                <RemoveSharpIcon className="cart__item--qty-icon" />
              </IconButton>
              <input
                className="cart__item--qty"
                disabled={true}
                type="text"
                value={cartItem.cartCount}
              />
              <IconButton color="primary">
                <AddSharpIcon className="cart__item--qty-icon" />
              </IconButton>
            </span>
          </div>
        );
      })}
    </div>
  );
};
export default Cart;
