import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Page from "./Page";

const About = () => {
  return (
    <Page title='Dashboard App'>
      <Container maxWidth='xl'>
        <Typography variant='h4' sx={{ pb: 4 }}>
          About
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} md={10}>
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
              features, the webpage provides valuable insights for optimizing
              the company's menu, pricing, and marketing strategies, ultimately
              improving customer experience and business operations.
            </Typography>
            <Typography variant='h6' sx={{ py: 6 }}>
              Version 1.0.0
            </Typography>
            <Typography variant='subtitle2'>COPYRIGHTS &copy;</Typography>
            {/* </Box> */}
          </Grid>

          <Grid item xs={12} sm={4} md={1}></Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default About;
