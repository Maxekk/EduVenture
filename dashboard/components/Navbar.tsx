import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useContext } from "react";
import { globalContext } from "@/context/globalContext";

function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { setisLogged } = useContext(globalContext);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    setisLogged(false);
  };

  return (
    <Box sx={{ flexGrow: 1, color: "black" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          borderBottom: "2px solid",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="menu"
            aria-controls="menu"
            aria-haspopup="true"
            onClick={handleClick}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, color: "black" }}
          >
            News
          </Typography>
          <Button
            color="inherit"
            sx={{ color: "black" }}
            onClick={handleLogOut}
          >
            Log Out
          </Button>
        </Toolbar>
      </AppBar>
      <Menu
        id="menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Section 1</MenuItem>
        <MenuItem onClick={handleClose}>Section 2</MenuItem>
        <MenuItem onClick={handleClose}>Section 3</MenuItem>
      </Menu>
    </Box>
  );
}

export default Navbar;
