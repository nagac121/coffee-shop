import "./App.css";
import Menu from "./components/Menu";

const initialMenu = [
  {
    itemName: "Bread",
    cost: "3",
    offer: "pay",
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
    offer: "pay",
    tax: "2%",
    discount: "0%",
  },
  {
    itemName: "Juice",
    cost: "15",
    offer: "pay",
    tax: "2%",
    discount: "0%",
  },
  {
    itemName: "Cream",
    cost: "0",
    offer: "free",
    tax: "0%",
    discount: "0%",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>BARISTA</div>
      </header>
      <Menu menuList={initialMenu} className="menu" />
    </div>
  );
}

export default App;
