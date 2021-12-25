import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Menu = ({ menuList }) => {
  console.log("menu: ", menuList);
  return (
    <Box display="flex" flexDirection="column" alignItems="center" padding={1}>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        menu
      </Typography>
      {/* <Stack spacing={2} alignItems="center"> */}
      <List dense={true}>
        {menuList.map((menuItem, index) => {
          return (
            <ListItem key={index}>
              <ListItemText primary={menuItem.itemName} />
            </ListItem>
          );
        })}
      </List>
      {/* </Stack> */}
    </Box>
  );
};
export default Menu;
