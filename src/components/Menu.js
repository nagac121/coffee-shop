import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Menu = ({ menuList }) => {
  console.log("menu: ", menuList);
  return (
    <div className="menu">
      <div className="menu__title">MENU</div>
      <div className="menu__list">
        {menuList.map((menuItem, index) => {
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
                <p className="menu__item--content">{menuItem.tax}</p>
              </div>
              <Button
                variant="outlined"
                endIcon={<AddShoppingCartIcon fontSize="small" />}
                sx={{ mt: 1, p: 0 }}
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
