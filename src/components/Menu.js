import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

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
              <ListItemText primary={menuItem.itemName} />
            </ListItem>
          );
        })}
      </List>
    </Box>
  );
};
export default Menu;
