import { Box, Card, Container, Grid, Link, Typography } from "@mui/material";
import React from "react";
import CardContent from "@mui/material/CardContent";
import Fab from "@mui/material/Fab";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";

function Restaurant() {
  return (
    <div>
      <Box>
        <Box
          sx={{
            backgroundImage: `url(https://res.cloudinary.com/dwn9amt1o/image/upload/v1664791115/New%20waycool/kitchen_zsctc6.jpg)`,
            height: "90vh",
            backgroundSize: "cover",
          }}
        >
          <Grid container>
            <Grid item md={6}></Grid>
            <Grid
              item
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "90vh",
                width: "100%",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "700",
                  color: "ButtonHighlight",
                  fontStyle: "oblique",
                }}
              >
                Biggest Sale of the Year is LIVE!
              </Typography>
              <Typography
                variant="h5"
                sx={{ fontWeight: "600", color: "crimson" }}
              >
                Buying that can help you reach your B2B purchase goals
              </Typography>
              <Typography variant="h6" sx={{ color: "orange" }}>
                Explore our menu page to know more offers
              </Typography>

              <div>
                <Fab
                  variant="extended"
                  color="primary"
                  sx={{ fontWeight: "700" }}
                >
                  <Link
                    href="/menu"
                    sx={{ textDecoration: "none", color: "white" }}
                  >
                    Menu
                  </Link>{" "}
                </Fab>
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box pt={3}>
          <Grid
            container
            spacing={5}
            alignContent="center"
            justifyContent="center"
            pt={4}
          >
            <Grid
              item
              lg={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                src="https://res.cloudinary.com/dwn9amt1o/image/upload/v1664791115/New%20waycool/truckk_npzrps.png"
                width={150}
              />
              <Typography variant="h5">Choose Your Favorite</Typography>
              <Typography variant="subtitle">
                Choose your favorite meals and order online or by phone. It's
                easy to customize your order.
              </Typography>
            </Grid>
            <Grid
              item
              lg={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                src="https://res.cloudinary.com/dwn9amt1o/image/upload/v1664791114/New%20waycool/pack_bn9fi5.png"
                width={150}
              />
              <Typography variant="h5">We Deliver Your Meals</Typography>
              <Typography variant="subtitle">
                We prepared and delivered meals arrive at your door. Duis autem
                vel eum iriure dolor in hendrerit in vulputate.
              </Typography>
            </Grid>
            <Grid
              item
              lg={4}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <img
                src="https://res.cloudinary.com/dwn9amt1o/image/upload/v1664791113/New%20waycool/cus_s8x0lw.png"
                width={150}
              />
              <Typography variant="h5">Eat And Enjoy</Typography>
              <Typography variant="subtitle">
                No shooping, no cooking, no counting and no cleaning. Enjoy your
                healthy meals with your family.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Grid pt={6} pb={4}>
          <Box
            className="Home"
            sx={{
              backgroundColor: "cornsilk",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
            }}
          >
            <Grid container spacing={1}>
              <Grid item md={6}>
                <Container>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "600", color: "darkgoldenrod" }}
                  >
                    More business tools, greater value for your B2B buying
                    process
                  </Typography>
                  <Box mt={3}>
                    <Typography variant="body " sx={{ fontWeight: "600" }}>
                      Business purchasing solutions like advanced analytics and
                      spend management tools that work for you and simplify your
                      B2B purchase processes.
                    </Typography>
                  </Box>
                </Container>
              </Grid>
              <Grid container md={6} mt={3}>
                <Grid xs={4} md={8} sx={{ display: "flex" }}>
                  <img
                    src="https://res.cloudinary.com/dwn9amt1o/image/upload/v1664791114/New%20waycool/cold_pvgtij.jpg"
                    width={230}
                  />

                  <img
                    src="https://res.cloudinary.com/dwn9amt1o/image/upload/v1664791113/New%20waycool/crat_o6yal2.jpg"
                    width={230}
                  />
                </Grid>
                <Grid xs={3} md={2}></Grid>
                <Grid xs={4}>
                  <img
                    src="https://res.cloudinary.com/dwn9amt1o/image/upload/v1664791114/New%20waycool/dock_fmgxbi.jpg"
                    width={350}
                  />
                </Grid>
                <Grid xs={5}></Grid>
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Container sx={{ pb: 5 }}>
          <Grid mb={2}>
            <Typography variant="h4" mt={3} mb={3}>
              Select your category for bulk orders
            </Typography>
            <div>
              <Grid container spacing={2} sx={{ display: "flex" }}>
                <Grid item xs={4} sx={{}}>
                  <Card sx={{ maxWidth: 300 }} className="img-wrapper">
                    <NavLink to={"/menu"}>
                      <img
                        src="https://res.cloudinary.com/dwn9amt1o/image/upload/v1664791119/New%20waycool/vege_i56beh.jpg"
                        alt=""
                        className="hover-zoom"
                        height={200}
                      />
                    </NavLink>

                    <CardContent>
                      <Typography
                        variant="h5"
                        color="lightseagreen"
                        sx={{ fontFamily: "fantasy" }}
                      >
                        Vegetables
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4} sx={{}}>
                  <Card sx={{ maxWidth: 300 }} className="img-wrapper">
                    <Link href="/menu">
                      <img
                        src="https://res.cloudinary.com/dwn9amt1o/image/upload/v1664791119/New%20waycool/milky_q6evqi.jpg"
                        alt=""
                        className="hover-zoom"
                        height={200}
                      />
                    </Link>

                    <CardContent>
                      <Typography
                        variant="h5"
                        color="lightseagreen"
                        sx={{ fontFamily: "fantasy" }}
                      >
                        Dairy products
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={4} sx={{}}>
                  <Card sx={{ maxWidth: 300 }} className="img-wrapper">
                    <Link href="/menu">
                      <img
                        src="https://res.cloudinary.com/dwn9amt1o/image/upload/v1664791115/New%20waycool/spices_leqimk.jpg"
                        alt=""
                        className="hover-zoom"
                        height={200}
                      />
                    </Link>

                    <CardContent>
                      <Typography
                        variant="h5"
                        color="lightseagreen"
                        sx={{ fontFamily: "fantasy" }}
                      >
                        Spices and more
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Container>
        <Footer />
      </Box>
    </div>
  );
}

export default Restaurant;
