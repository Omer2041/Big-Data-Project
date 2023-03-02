import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Page from "./Page";
import BranchDatePicker from "../utils/BranchDatePicker";
import OrdersTable from "../dataViews/OrdersTable";
import dayjs from "dayjs";

const Search = ({ orders, searchOrders, loaded }) => {
  const [currentBranch, setCurrentBranch] = useState("");
  const [date, setDate] = useState(() => dayjs("2023-02-22T00:00"));

  const onSearch = () => {
    searchOrders({ branch: currentBranch, date: date.format("YYYY-MM-DD") });
  };

  const showAllOrders = () => {
    searchOrders();
  };

  return (
    <Page title='Search'>
      <Container maxWidth='xl'>
        <Box>
          <Typography sx={{ mb: 5 }} variant='h4'>
            Search For Orders
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={8}>
            <BranchDatePicker
              currentBranch={currentBranch}
              setCurrentBranch={setCurrentBranch}
              date={date}
              setDate={setDate}
              onSearch={onSearch}
              showAllOrders={showAllOrders}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {!loaded && (
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <CircularProgress sx={{ color: "#36454f" }} />
              </Box>
            )}
          </Grid>
          <Grid item xs={12} sm={4} md={12}>
            <OrdersTable data={orders} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Search;
