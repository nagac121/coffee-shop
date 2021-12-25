import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Menu = ({ menuList }) => {
  console.log("menu: ", menuList);
  return (
    <div className="menu">
      <div className="menu-title">MENU</div>
      <div className="menu-list">
        {menuList.map((menuItem, index) => {
          return (
            <div key={index} className="menu-item">
              <div>
                <p>Item Name: </p>
                <p>{menuItem.itemName}</p>
              </div>
              <div>{menuItem.cost}</div>
              <Button
                variant="outlined"
                endIcon={<AddShoppingCartIcon fontSize="small" />}
                sx={{ m: 0, p: 0 }}
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
