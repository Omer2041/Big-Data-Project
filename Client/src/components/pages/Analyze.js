import React, { useState } from "react";
import { Box, Typography, Grid, CircularProgress } from "@mui/material";
import Page from "./Page";
import { Container } from "@mui/system";
import dayjs from "dayjs";
import RelationTable from "../dataViews/RelationTable";
import DatesRangePicker from "../utils/DatesRangePicker";

const Analyze = ({ buildModel, data, loaded }) => {
  const [fromDate, setFromDate] = useState(() => dayjs("2023-02-22T00:00"));
  const [toDate, setToDate] = useState(() => dayjs("2023-02-22T00:00"));

  const onBuildModel = () => {
    buildModel({
      date: {
        $gte: fromDate.format("YYYY-MM-DD"),
        $lte: toDate.format("YYYY-MM-DD"),
      },
    });
  };
  return (
    <Page title='Analyze'>
      <Container maxWidth='xl'>
        <Box>
          <Typography sx={{ mb: 5 }} variant='h4'>
            Analyze
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={8}>
            <DatesRangePicker
              fromDate={fromDate}
              toDate={toDate}
              setFromDate={setFromDate}
              setToDate={setToDate}
              onBuildModel={onBuildModel}
              loaded={loaded}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            {!loaded && (
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <CircularProgress sx={{ color: "#36454f" }} />
              </Box>
            )}
          </Grid>
          <Grid item xs={12} sm={6} md={12}>
            <RelationTable data={data} loaded={loaded} />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Analyze;
