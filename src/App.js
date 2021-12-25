// react lib
import { useState } from "react";
// css
import "./App.css";
// components
import Menu from "./components/Menu";
import Cart from "./components/Cart";

const initialMenu = [
  {
    itemId: 1,
    itemName: "Bread",
    cost: "3",
    tax: "1%",
    discount: "0%",
    combo: [
      {
        item: "Coffee",
        discount: "2%",
      },
      {
        item: "Juice",
        discount: "3%",
      },
    ],
    cartCount: 0,
  },
  {
    itemId: 2,
    itemName: "Coffee",
    cost: "10",
    tax: "2%",
    discount: "0%",
    cartCount: 0,
  },
  {
    itemId: 3,
    itemName: "Juice",
    cost: "15",
    tax: "2%",
    discount: "0%",
    cartCount: 0,
  },
  {
    itemId: 4,
    itemName: "Cream",
    cost: "0",
    tax: "0%",
    discount: "0%",
    cartCount: 0,
  },
  {
    itemId: 5,
    itemName: "Sugar",
    cost: "0",
    tax: "0%",
    discount: "0%",
    cartCount: 0,
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddBtn = (menuItem) => {
    let isExist = false;
    // console.log("cartItems: ", cartItems);
    let cartItemsArr = [...cartItems];
    for (let i = 0; i < cartItemsArr.length; i++) {
      if (cartItemsArr[i].itemId === menuItem.itemId) {
        cartItemsArr[i].cartCount++;
        isExist = true;
        break;
      }
    }
    cartItemsArr = isExist ? [...cartItemsArr] : [...cartItemsArr, menuItem];
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
        <Cart cartData={cartItems} />
      </div>
    </div>
  );
}

export default App;
