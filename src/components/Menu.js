import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";


const Menu = ({ menuData, handleAddBtnEvent }) => {
  return (
    <div className="menu">
      <header>MENU</header>
      <div className="menu__list">
        {menuData.map((menuItem, index) => {
          return (
            <div key={index} className="menu__item">
              <div>
                <p className="menu__item--label">Item Name: </p>
                <p className="menu__item--content">{menuItem.itemName}</p>
              </div>
              <div>
                <p className="menu__item--label">Item Cost: </p>
                <p className="menu__item--content">{menuItem.cost}</p>
              </div>
              <div>
                <p className="menu__item--label">Sales Tax: </p>
                <p className="menu__item--content">{menuItem.taxPercent}%</p>
              </div>
              <Button
                variant="outlined"
                endIcon={<AddShoppingCartIcon fontSize="small" />}
                sx={{ mt: 1, p: 0 }}
                onClick={() => handleAddBtnEvent(menuItem)}
              >
                Add
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Menu;
