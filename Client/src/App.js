import { Box } from "@mui/material";
import React from "react";
import Routes from "./components/Routes";
import ScrollTop from "./components/utils/ScrollTop";

function App() {
  return (
    <Box sx={{ bgcolor: "whitesmoke", minHeight: 895 }}>
      <ScrollTop />
      <Routes />
    </Box>
  );
}

export default App;
