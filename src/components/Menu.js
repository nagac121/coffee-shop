import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const Menu = ({ menuList }) => {
  console.log("menu: ", menuList);
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      className="menu"
    >
      <Typography variant="h6" component="div">
        menu
      </Typography>
      <List dense={true}>
        {menuList.map((menuItem, index) => {
          return (
            <ListItem key={index} className="menu-item">
              <ListItemText primary={menuItem.itemName} sx={{m:0,p:0}}/>
              <Button
                variant="outlined"
                endIcon={<AddShoppingCartIcon fontSize="small" />}
                sx={{m:0, p:0}}
              >
                Add
              </Button>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
export default Menu;
