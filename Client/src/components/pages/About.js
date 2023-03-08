import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Page from "./Page";

const About = () => {
  return (
    <Page title='About'>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} md={9}>
          <Typography variant='h5' sx={{ py: 4 }}>
            Pizza DashBoard App
          </Typography>
          <Typography variant='overline'>
            The webpage being developed is a React-based dashboard for a pizza
            company. Its microservices architecture facilitates real-time
            monitoring of pizza orders and customer behavior analysis. The
            dashboard has three primary features: a live dashboard, orders
            search page, and an analyze page that employs machine learning to
            identify ordering patterns and customer preferences. With these
            features, the webpage provides valuable insights for optimizing the
            company's menu, pricing, and marketing strategies, ultimately
            improving customer experience and business operations.
          </Typography>
          <Typography variant='h6' sx={{ py: 6 }}>
            Version 1.0.0
          </Typography>
          <Typography variant='subtitle2'>COPYRIGHTS &copy;</Typography>
        </Grid>

        <Grid item xs={12} sm={4} md={3}>
          <img
            src='https://i.pinimg.com/564x/fe/80/15/fe80156a256013acd4f462e26ce66119.jpg'
            width={300}
            height={620}
            style={{ borderRadius: 3, position: 'absolute' }}
          />
        </Grid>
      </Grid>
    </Page>
  );
};

export default About;
