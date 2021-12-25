// react lib
import { useState } from "react";
// css
import "./App.css";
// components
import Menu from "./components/Menu";
import Cart from "./components/Cart";

const initialMenu = [
  {
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
  },
  {
    itemName: "Coffee",
    cost: "10",
    tax: "2%",
    discount: "0%",
  },
  {
    itemName: "Juice",
    cost: "15",
    tax: "2%",
    discount: "0%",
  },
  {
    itemName: "Cream",
    cost: "0",
    tax: "0%",
    discount: "0%",
  },
  {
    itemName: "Sugar",
    cost: "0",
    tax: "0%",
    discount: "0%",
  },
];

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddBtn = (menuItem) => {
    // console.log("menuItem: ", menuItem);
    const cartArr = [...cartItems, menuItem];
    // console.log("cart arr: ",cartArr);
    setCartItems(cartArr);
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
