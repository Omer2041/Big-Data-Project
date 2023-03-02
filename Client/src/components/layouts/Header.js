import React from "react";
import { Typography, Toolbar } from "@mui/material";
import MuiAppBar from "@mui/material/AppBar";
import { styled, useTheme } from "@mui/material/styles";
import { Icon } from "@iconify/react";

const Header = () => {
  const AppBar = styled(MuiAppBar)(({ theme }) => ({
    zIndex: theme.zIndex.drawer + 1,
  }));

  return (
    <AppBar
      position='fixed'
      sx={{
        // backgroundImage:
        //   "radial-gradient( circle farthest-corner at 22.4% 21.7%, rgba(4,189,228,1) 0%, rgba(2,83,185,1) 100.2% )",
        bgcolor: "#353839",
        height: "6%",
      }}>
      <Toolbar sx={{ m: -0.75 }}>
        <Icon
          icon={"material-symbols:dashboard"}
          height={30}
          width={30}
          style={{ marginRight: 12 }}
        />
        <Typography
          variant='h5'
          component='div'
          sx={{ flexGrow: 1 }}
        >
          Pizza DashBoard
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
