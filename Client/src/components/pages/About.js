import React from "react";
import { Box, Typography, Container, Grid } from "@mui/material";
import Page from "./Page";

const About = () => {
  return (
    <Page title='Dashboard App'>
      <Container maxWidth='xl'>
        <Box sx={{ pb: 5 }}>
          <Typography variant='h3'>About</Typography>
        </Box>
        <Grid container spacing={3}>
          {/*  */}
          <Grid item xs={12} sm={4} md={3}></Grid>
          <Grid item xs={12} sm={4} md={6}>
            <Box
              sx={{
                bgcolor: "white",
                //   "radial-gradient( circle farthest-corner at 22.4% 21.7%, rgba(4,189,228,1) 0%, rgba(2,83,185,1) 100.2% )",
                boxShadow: 5,
                borderRadius: 1,
                // color: "white",
                opacity: 1,
              }}>
              <Typography align='center' variant='h3' sx={{ p: 3 }}>
                DashBoard App
              </Typography>
              <Typography align='center' variant='h4' sx={{ p: 3, mt: 5 }}>
                @DashBoard
              </Typography>
              <Typography align='center' variant='h5' sx={{ p: 3 }}>
                Version 1.0.0
              </Typography>
              <Typography align='center' variant='h6' sx={{ p: 3 }}>
                COPYRIGHTS &copy;
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={4} md={4}></Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default About;
