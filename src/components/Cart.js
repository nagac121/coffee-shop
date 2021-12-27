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
            <span>
              <IconButton
                color="primary"
                onClick={() => handleRemoveBtnEvent(cartItem)}
              >
                <RemoveSharpIcon className="cart__item--qty-icon" />
              </IconButton>
              <input
                className="cart__item--qty-ip"
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
              <label>Sales Tax: </label>
              <span>{cartItem.taxPercent}%</span>
            </div>
            <div>
              <label>Discount applied: </label>
              <span>{cartItem.discountApplied}%</span>
            </div>
            <div>
              <span>Item Cost + tax - Discount: </span>
              <span>
                {parseFloat(
                  cartItem.cartCount *
                    (cartItem.cost +
                      cartItem.cost * (cartItem.taxPercent / 100)) -
                    cartItem.discountApplied / 100
                ).toFixed(2)}
              </span>
            </div>
          </div>
        );
      })}
      <div>
        {Math.round(cartCost) ? (
          <div className="cart__item--cartTotal">
            <span>Total Cost: </span>
            <span>{cartCost}</span>
          </div>
        ) : (
          <div className="cart__item--cart-empty-msg">Add cart items !</div>
        )}
      </div>
    </div>
  );
};
export default Cart;
