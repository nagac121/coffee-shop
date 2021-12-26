import IconButton from "@mui/material/IconButton";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import RemoveSharpIcon from "@mui/icons-material/RemoveSharp";

const Cart = ({
  cartData,
  cartCost,
  handleAddBtnEvent,
  handleRemoveBtnEvent,
}) => {
  // console.log("cart data: ", cartData);
  return (
    <div className="cart">
      <header>CART ITEMS</header>
      {cartData.map((cartItem, index) => {
        return (
          <div className="cart__item" key={index}>
            <span>{cartItem.itemName}</span>
            <span className="cart-qty-section">
              <IconButton
                color="primary"
                onClick={() => handleRemoveBtnEvent(cartItem)}
              >
                <RemoveSharpIcon className="cart__item--qty-icon" />
              </IconButton>
              <input
                className="cart__item--qty"
                disabled={true}
                type="text"
                value={cartItem.cartCount}
              />
              <IconButton
                color="primary"
                onClick={() => handleAddBtnEvent(cartItem)}
              >
                <AddSharpIcon className="cart__item--qty-icon" />
              </IconButton>
            </span>
            <div>
              <span>Item Cost with tax: </span>
              <span>
                {cartItem.cartCount *
                  (cartItem.cost + cartItem.taxPercent / 100)}
              </span>
            </div>
          </div>
        );
      })}
      <div>
        {Math.round(cartCost) ? (
          <>
            <span>Total Cost</span>
            <span>{cartCost}</span>
          </>
        ) : (
          <div className="cart__item--cart-empty-msg">Add cart items!</div>
        )}
      </div>
    </div>
  );
};
export default Cart;
