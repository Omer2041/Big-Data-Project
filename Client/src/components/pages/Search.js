import React, { useState, useEffect } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Page from "./Page";
import BranchDatePicker from "../utils/BranchDatePicker";
import { DefaultDataConfig } from "../config/defaultData";
import OrdersTable from "../dataViews/OrdersTable";
import axios from "axios";
import dayjs from "dayjs";

const Search = () => {
  const [data, setData] = useState(DefaultDataConfig);
  const [isloaded, setIsLoaded] = useState(true);
  const [branches, setBranches] = useState([[]]);
  const [currentStore, setCurrentStore] = useState("");
  const [date, setDate] = useState(() => dayjs("2022-02-01T00:00"));

  // useEffect(() => {
  //   const getCitiesFlavors = async () => {
  //     setIsLoaded(false);
  //     await axios("http://localhost:4000/api/getCitiesFlavors")
  //       .then((res) => {
  //         console.log(res.data);
  //         setBranches(res.data);
  //         setIsLoaded(true);
  //       })
  //       .catch((err) => console.error(err));
  //   };
  //   getCitiesFlavors();
  // }, []);

  const onSearch = () => {};

  return (
    <Page title='Search'>
      <Container maxWidth='xl'>
        <Box>
          <Typography variant='h4'>Search For Orders</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={3}></Grid>
          <Grid item xs={12} sm={4} md={6}>
            <BranchDatePicker
              currentStore={currentStore}
              setCurrentStore={setCurrentStore}
              branches={branches}
            />
          </Grid>
          <Grid item xs={12} sm={4} md={3}></Grid>
          <Grid item xs={12} sm={4} md={12}>
            <OrdersTable />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Search;
