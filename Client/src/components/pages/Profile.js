import React from "react";
import { Box, Typography, Container, Grid, Avatar, Card } from "@mui/material";
import Page from "./Page";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <Page title='Dashboard App'>
      <Container maxWidth='xl'>
        <Box sx={{ pb: 5 }}>
          <Typography variant='h3'>Site Manager</Typography>
        </Box>
        <Grid container spacing={3}>
          {/*  */}
          <Grid item xs={12} sm={4} md={3}></Grid>
          <Grid item xs={12} sm={4} md={6}>
            <Card
              sx={{
                boxShadow: 5,
                borderTopLeftRadius: 85,
                borderBottomLeftRadius: 85,
              }}>
              <Typography align='center' variant='h5' sx={{ p: 2 }}>
                Omer Shalom
              </Typography>
              <Typography align='center' variant='h6' sx={{ p: 1 }}>
                FullStack Developer
              </Typography>
              <Typography align='center' variant='h6' sx={{ p: 1 }}>
                Omer2346@gmail.com
              </Typography>
              <Box
                sx={{
                  textAlign: "center",
                  flexDirection: "column",
                  display: "flex",
                }}>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={"https://www.linkedin.com/in/omer-shalom-18915720a/"}>
                  Linked In
                </a>
                <a
                  target='_blank'
                  rel='noopener noreferrer'
                  href={"https://www.linkedin.com/in/omer-shalom-18915720a/"}>
                  Git Hub
                </a>
              </Box>
              <Typography align='center' variant='h1' sx={{ p: 3 }}>
                <Avatar
                  sx={{
                    width: 270,
                    height: 270,
                    position: "absolute",
                    left: 480,
                    top: 190,
                  }}
                  src={"https://avatars.githubusercontent.com/u/73235082?v=4"}
                  // onClick={() => navigate("profile")}
                />
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4} md={3}></Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Profile;
