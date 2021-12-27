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
    cost: 20,
    taxPercent: 1,
    discountApplied: 0,
    combo: [
      {
        itemId: 2,
        itemName: "Coffee",
        discountPercent: 2,
      },
      {
        itemId: 3,
        itemName: "Juice",
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
    discountApplied: 0,
    cartCount: 0,
  },
  {
    itemId: 3,
    itemName: "Juice",
    cost: 15,
    taxPercent: 2,
    discountApplied: 0,
    cartCount: 0,
  },
  {
    itemId: 4,
    itemName: "Cream",
    cost: 0,
    taxPercent: 0,
    discountApplied: 0,
    cartCount: 0,
  },
  {
    itemId: 5,
    itemName: "Sugar",
    cost: 0,
    taxPercent: 0,
    discountApplied: 0,
    cartCount: 0,
  },
];

function App() {
  const [getCartItems, setCartItems] = useState([]);
  const [getCartCost, setCartCost] = useState(0);
  const [getCartMap, setCartMap] = useState({});

  useEffect(() => {
    // console.log("getCartItems: ", getCartItems);
    // calculate total cart amount
    const totalCartAmt = getCartItems.reduce((acc, current) => {
      // console.log("current: ",current);
      acc +=
        current.cartCount *
        (current.cost + current.cost * (current.taxPercent / 100)) - (current.discountApplied / 100);
      return acc;
    }, 0);
    // console.log("totalCartAmt: ", totalCartAmt.toFixed(2));
    setCartCost(totalCartAmt.toFixed(2));

    // prepare cartMap
    let cartObj = {};
    for (let i = 0; i < getCartItems.length; i++) {
      cartObj[getCartItems[i].itemId] = getCartItems[i].cartCount;
    }
    setCartMap(cartObj);
  }, [getCartItems]);

  const handleAddBtn = (addItem) => {
    // console.log("handleAddBtn");
    let isExist = false;
    // console.log("getCartItems: ", getCartItems);
    let cartItemsArr = [...getCartItems];

    // if add-item already exist, in the cart then increment the cart count
    for (let i = 0; i < cartItemsArr.length; i++) {
      if (addItem.itemId === cartItemsArr[i].itemId) {
        // increase cart count for add-item
        cartItemsArr[i].cartCount++;
        isExist = true;
        // apply discount
        break;
      }
    }
    // if add-item doesn't exist in the cart, then increment cart count by 1.
    if (!isExist) {
      addItem.cartCount = 1;
    }
    // if add-item exist in the cart, then update cart by modified count, else add newly added item to the cart.
    cartItemsArr = isExist ? [...cartItemsArr] : [...cartItemsArr, addItem];
    // console.log("cartItemsArr: ", cartItemsArr);
    // DISCOUNT
    const { discountToBeApplied, discountItemId } = getComboDiscount(addItem);
    // console.log("discountToBeApplied: ", discountToBeApplied);

    // apply discount on add-item
    for (let i = 0; i < cartItemsArr.length; i++) {
      const comboItems = cartItemsArr[i].combo;
      if (comboItems) {
        for (let j = 0; j < comboItems.length; j++) {
          if (comboItems[j].itemId === discountItemId) {
            cartItemsArr[i].discountApplied = discountToBeApplied;
          }
        }
      }
    }
    // console.log("cartItemsArr: ", cartItemsArr);
    setCartItems(cartItemsArr);
  };

  const handleRemoveBtn = (removeItem) => {
    // console.log("handleRemoveBtn");
    // console.log("getCartItems: ", getCartItems);
    let cartItemsArr = [...getCartItems];
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
    if (removeItem.combo) {
      getComboDiscount(removeItem);
    }
    setCartItems(cartItemsArr);
  };

  const getComboDiscount = (cartItem) => {
    // console.log("getComboDiscount");
    let discountObj = { discountToBeApplied: 0, discountItemId: null };
    // if combo exist
    if (cartItem.combo) {
      // bread
      const comboItems = cartItem.combo;
      for (let i = 0; i < comboItems.length; i++) {
        // prepare cartMap in useEffect and check with cartMap
        if (comboItems[i].itemId === getCartMap[comboItems[i].itemId]) {
          discountObj.discountToBeApplied = comboItems[i].discountPercent;
          discountObj.discountItemId = comboItems[i].itemId;
        }
      }
    } else {
      // console.log("else");
      // coffee
      for (let i = 0; i < getCartItems.length; i++) {
        // checking discount for items, which has combo
        if (getCartItems[i].combo) {
          const comboItems = getCartItems[i].combo;
          // console.log("comboItems: ",comboItems);
          for (let i = 0; i < comboItems.length; i++) {
            if (comboItems[i].itemId === cartItem.itemId) {
              // console.log("else 2", comboItems[i]);
              const discountPercent = comboItems[i].discountPercent;
              if (
                discountPercent &&
                comboItems[i].discountToBeApplied > discountPercent
              ) {
                discountObj.discountToBeApplied = discountPercent;
              } else {
                discountObj.discountToBeApplied = discountPercent;
              }
              discountObj.discountItemId = comboItems[i].itemId;
            }
          }
        }
      }
    }
    return discountObj;
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>BARISTA</div>
      </header>
      <div className="app__sections">
        <Menu menuData={initialMenu} handleAddBtnEvent={handleAddBtn} />
        <Cart
          cartData={getCartItems}
          cartCost={getCartCost}
          handleAddBtnEvent={handleAddBtn}
          handleRemoveBtnEvent={handleRemoveBtn}
        />
      </div>
    </div>
  );
}

export default App;
