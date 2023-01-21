import React, { useState, useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import Page from "./Page";
import { Container } from "@mui/system";
import dayjs from "dayjs";
import RelationTable from "../dataViews/RelationTable";
import DatesRangePicker from "../utils/DatesRangePicker";
const Analyze = () => {
  const [fromDate, setFromDate] = useState(() => dayjs("2022-02-01T00:00"));
  const [toDate, setToDate] = useState(() => dayjs("2022-02-01T00:00"));

  // useEffect(() => {
  //   const getCitiesFlavors = async () => {
  //     await axios("http://localhost:4000/api/getCitiesFlavors")
  //       .then((res) => {
  //         console.log(res.data);
  //         // setStoresFlavors(res.data);
  //       })
  //       .catch((err) => console.error(err));
  //   };
  //   getCitiesFlavors();
  // }, []);

  const onBuildModel = () => {
    const dataForTrain = {};
  };
  return (
    <Page>
      <Container maxWidth='xl'>
        <Box>
          <Typography variant='h4'>Analyze</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={3}></Grid>
          <Grid item xs={12} sm={6} md={6}>
            <DatesRangePicker
              fromDate={fromDate}
              toDate={toDate}
              setFromDate={setFromDate}
              setToDate={setToDate}
              onBuildModel={onBuildModel}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}></Grid>
          <Grid item xs={12} sm={6} md={12}>
            <RelationTable />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Analyze;
