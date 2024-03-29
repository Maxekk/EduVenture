import React, { useState, useContext, useEffect } from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { AiFillHome } from "react-icons/ai";
import MenuOption from "./MenuOption";
import { TfiAnnouncement } from "react-icons/tfi";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLogoutBoxRFill } from "react-icons/ri";
import { BiMedal } from "react-icons/bi";
import { globalContext } from "@/context/globalContext";
import Home from "./Home";
import Announcements from "./Announcements";
import AnnouncementOverlay from "./AnnouncementOverlay";
import ManageStudents from "./ManageStudents";
import EditOverlay from "./EditOverlay";
import MyGrades from "./MyGrades";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  backgroundColor: "white",
  color: "black",
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const {
    route,
    setIsLogged,
    userData,
    showAnnouncementOverlay,
    showEditOverlay,
    isAdmin,
    getCurrentHour,
    getCurrentDate,
    clearMemory
  } = useContext(globalContext);
  const [currentHour, setCurrentHour] = useState<String>();
  const [currentDate, setCurrentDate] = useState<String>();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  setInterval(() => {
    setCurrentHour(getCurrentHour());
    setCurrentDate(getCurrentDate());
  }, 1000);

  return (
    <div className="bg-[rgb(232,234,237)] h-screen">
    <Box sx={{ display: "flex", overflow: "hidden" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "left",
              alignItems: "left",
              marginLeft: "auto",
              paddingLeft: 0,
            }}
          >
            <Typography variant="h6" noWrap component="div">
              {currentDate} | {currentHour}
            </Typography>
          </Box>
          <Typography>
            {userData.firstname} {userData.lastname}{" "}
            <b>{isAdmin ? "(Teacher)" : "(Student)"}</b>
          </Typography>
          <IconButton
            color="inherit"
            aria-label="button"
            edge="end"
            onClick={() => {
              setIsLogged(false);
              clearMemory()
            }}
          >
            {<RiLogoutBoxRFill className="text-gray-500" />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {isAdmin ? (
          <List>
            <MenuOption
              open={open}
              text={"Home"}
              icon={<AiFillHome className="w-[20px] h-[20px]" />}
            />
            <MenuOption
              open={open}
              text={"Annoucements"}
              icon={<TfiAnnouncement className="w-[20px] h-[20px]" />}
            />
            <MenuOption
              open={open}
              text={"Manage Students"}
              icon={<BsFillPersonFill className="w-[20px] h-[20px]" />}
            />
          </List>
        ) : (
          <List>
            <MenuOption
              open={open}
              text={"Home"}
              icon={<AiFillHome className="w-[20px] h-[20px]" />}
            />
            <MenuOption
              open={open}
              text={"Annoucements"}
              icon={<TfiAnnouncement className="w-[20px] h-[20px]" />}
            />
            <MenuOption
              open={open}
              text={"My grades"}
              icon={<BiMedal className="w-[30px] h-[30px] ml-[-5px]" />}
            />
          </List>
        )}
        <Divider />
      </Drawer>
      <div className="w-[100%] h-[97vh] mt-0">
        <DrawerHeader />
        {route === "Home" && <Home />}
        {route === "Annoucements" && <Announcements />}
        {route === "Manage Students" && <ManageStudents />}
        {route === "My grades" && <MyGrades />}
      </div>
      {showAnnouncementOverlay && <AnnouncementOverlay />}
      {showEditOverlay && <EditOverlay />}
    </Box>
    </div>
  );
}
