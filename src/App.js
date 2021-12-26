// react lib
import { useEffect, useState } from "react";
// css
import "./App.css";
// components
import Menu from "./components/Menu";
import Cart from "./components/Cart";

const initialMenu = [
  {
    itemId: 1,
    itemName: "Bread",
    cost: 3,
    taxPercent: 1,
    discountPercent: 0,
    combo: [
      {
        item: "Coffee",
        discountPercent: 2,
      },
      {
        item: "Juice",
        discountPercent: 3,
      },
    ],
    cartCount: 0,
  },
  {
    itemId: 2,
    itemName: "Coffee",
    cost: 10,
    taxPercent: 2,
    discountPercent: 0,
    cartCount: 0,
  },
  {
    itemId: 3,
    itemName: "Juice",
    cost: 15,
    taxPercent: 2,
    discountPercent: 0,
    cartCount: 0,
  },
  {
    itemId: 4,
    itemName: "Cream",
    cost: 0,
    taxPercent: 0,
    discountPercent: 0,
    cartCount: 0,
  },
  {
    itemId: 5,
    itemName: "Sugar",
    cost: 0,
    taxPercent: 0,
    discountPercent: 0,
    cartCount: 0,
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [cartCost, setCartCost] = useState(0);

  useEffect(() => {
    // console.log("cartItems: ", cartItems);
    const totalCartAmt = cartItems.reduce((acc, current) => {
      // console.log("current: ",current);
      acc +=
        current.cartCount *
        (current.cost + current.cost * (current.taxPercent / 100));
      return acc;
    }, 0);
    // console.log("totalCartAmt: ", totalCartAmt.toFixed(2));
    setCartCost(totalCartAmt.toFixed(2));
  }, [cartItems]);

  const handleAddBtn = (addItem) => {
    // console.log("handleAddBtn");
    let isExist = false;
    // console.log("cartItems: ", cartItems);
    let cartItemsArr = [...cartItems];
    for (let i = 0; i < cartItemsArr.length; i++) {
      if (addItem.itemId === cartItemsArr[i].itemId) {
        cartItemsArr[i].cartCount++;
        isExist = true;
        break;
      }
    }

    if (!isExist) {
      addItem.cartCount++;
    }

    cartItemsArr = isExist ? [...cartItemsArr] : [...cartItemsArr, addItem];
    // console.log("cartItemsArr: ", cartItemsArr);
    setCartItems(cartItemsArr);
  };

  const handleRemoveBtn = (removeItem) => {
    // console.log("handleRemoveBtn");
    // console.log("cartItems: ", cartItems);
    let cartItemsArr = [...cartItems];
    for (let i = 0; i < cartItemsArr.length; i++) {
      if (removeItem.itemId === cartItemsArr[i].itemId) {
        cartItemsArr[i].cartCount--;
        break;
      }
    }
    if (removeItem.cartCount === 0) {
      cartItemsArr = cartItemsArr.filter(
        (element) => removeItem.itemId !== element.itemId
      );
    }
    // console.log("cartItemsArr: ", cartItemsArr);
    setCartItems(cartItemsArr);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>BARISTA</div>
      </header>
      <div className="app__sections">
        <Menu menuData={initialMenu} handleAddBtnEvent={handleAddBtn} />
        <Cart
          cartData={cartItems}
          cartCost={cartCost}
          handleAddBtnEvent={handleAddBtn}
          handleRemoveBtnEvent={handleRemoveBtn}
        />
      </div>
    </div>
  );
}

export default App;
