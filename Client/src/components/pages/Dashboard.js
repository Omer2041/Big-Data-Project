import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Page from "./Page";
import { DefaultDataConfig } from "../config/defaultData";
import axios from "axios";
import CounterDetails from "../dataViews/CounterDetails";
import ChartDetails from "../dataViews/ChartDetails";
import { ChartDetailsConfig } from "../config/charts";
import { CounterDetailsConfig } from "../config/counters";
import { io } from "socket.io-client";

const socket = io.connect("http://localhost:4001");

const Dashboard = () => {
  const [isloaded, setIsLoaded] = useState(true);
  const [data, setData] = useState(DefaultDataConfig);

  useEffect(() => {
    socket.on("orders_data", (res) => {
      console.log(res);
      setData(res);
    });
  }, [socket]);

  return (
    <Page title='Dashboard App'>
      <Container maxWidth='xl'>
        <Box sx={{ pb: 5 }}>
          <Typography variant='h3'>Dashboard</Typography>
        </Box>
        <Grid container spacing={3}>
          {CounterDetailsConfig.map((item) => {
            return (
              <Grid key={item.name} item xs={12} sm={4} md={3}>
                <CounterDetails
                  title={item.name}
                  data={data[item.name]}
                  isloaded={data[item.name] != null}
                  icon={item.icon}
                  color={item.color}
                />
              </Grid>
            );
          })}
          {ChartDetailsConfig.map((item) => {
            return (
              <Grid
                key={item.name}
                item
                xs={12}
                sm={4}
                md={item.type != "line" ? 4 : 10}>
                <ChartDetails
                  title={item.name}
                  data={data[item.name]}
                  isloaded={data[item.name] != null}
                  type={item.type}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;