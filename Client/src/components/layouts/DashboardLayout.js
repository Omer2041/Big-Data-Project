import {
  Box,
  CssBaseline,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Avatar,
  Drawer,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import navButtons from "../config/navbarButtons";
import { useNavigate } from "react-router-dom";
import React from "react";
import { Outlet } from "react-router";
import Header from "./Header";
import NavItem from "./NavItem";

const drawerWidth = 190;

const NavRootStyled = styled("div")(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    flexShrink: 0,
    width: drawerWidth,
  },
}));

const LayoutRootStyled = styled("div")({
  display: "flex",
  minHeight: "100%",
  overflow: "hidden",
  width: "100%",
});

const MainStyle = styled("div")(({ theme, open }) => ({
  flexGrow: 1,
  overflow: "auto",
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("lg")]: {
    paddingTop: 75,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),

  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <NavRootStyled>
      <CssBaseline />
      <Drawer variant='permanent'>
        <DrawerHeader />
        <ListItem>
          <ListItemIcon>
            <Avatar
              sx={{ "&:hover": { cursor: "pointer" } }}
              src={"https://avatars.githubusercontent.com/u/73235082?v=4"}
              onClick={() => navigate("profile")}
            />
          </ListItemIcon>
          <ListItemText primary={"Welcome"} />
        </ListItem>
        <Divider sx={{ height: 20 }} variant='middle' />
        <List sx={{ display: "flex", flexDirection: "column" }}>
          {navButtons.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </List>
      </Drawer>
    </NavRootStyled>
  );
};

export default function DashboardLayout() {
  return (
    <Box>
      <CssBaseline />
      <Header />
      <LayoutRootStyled>
        <Navbar />
        <MainStyle>
          <Outlet />
        </MainStyle>
      </LayoutRootStyled>
    </Box>
  );
}
