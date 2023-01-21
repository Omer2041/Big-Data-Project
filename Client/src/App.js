import "./App.css";
import { Box } from "@mui/material";
import React from "react";
import Routes from "./components/Routes";
import { styled } from "@mui/material/styles";

function App() {
  return (
    <Box sx={{ bgcolor: "whitesmoke", minHeight: 895 }}>
      <Routes />
    </Box>
  );
}

export default App;
