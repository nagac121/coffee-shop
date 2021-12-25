import "./App.css";
import Menu from "./components/Menu";

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
  return (
    <div className="App">
      <header className="App-header">
        <div>BARISTA</div>
      </header>
      <Menu menuList={initialMenu} />
    </div>
  );
}

export default App;
