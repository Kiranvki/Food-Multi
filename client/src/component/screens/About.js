import { Box, Stack, Typography, Grid, Container } from "@mui/material";
import "../../style/CssStyle/index.css";
import React, { useEffect } from "react";
import Link from "@mui/material/Link";
import Footer from "./Footer";
import Aos from "aos";

function About() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Box sx={{ mt: "70px" }}>
      <Stack
        sx={{
          background: `url(${"https://res.cloudinary.com/dhina/image/upload/v1664783553/waycool/pexels-karolina-grabowska-5202203_z5qqhp.jpg"})no-repeat center`,
          backgroundSize: "cover",
          height: "54vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></Stack>
      <Box pt={5} pb={6}>
        <Box className="lineContainer">
          <Typography
            data-aos="fade-up"
            align="center"
            sx={{
              fontSize: "1.5rem",
              fontWeight: "600",
              color: "#f4474a",
              fontFamily: "Dancing Script, cursive",
            }}
            className="line"
          >
            About us
          </Typography>
        </Box>
        <Typography
          data-aos="fade-down"
          variant="h4"
          align="center"
          mt={1}
          sx={{ fontWeight: "600" }}
        >
          Welcome to CoolWay
        </Typography>
        <Container>
          <Grid container mt={3}>
            <Grid
              item
              lg={5}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box>
                <Typography variant="h4" fontSize={"2.25rem"} fontWeight={600}>
                  We Serve The Fresh fruits &#38; vegtables Of The Country
                </Typography>
                <Typography mt={4}>
                  We are the country's no.1 Fast food retailer. Country's Fresh
                  fruits &#38; vegtables are delivered by us. Lorem ipsum dolor
                  sit amet consectetur adipisicing elit. Consequatur est fuga
                  corrupti saepe eius excepturi deleniti cum corporis magnam,
                  tempora ad harum accusantium cupiditate eum ullam tenetur
                  similique vitae minus. We gain the satisfaction of our
                  customers with our delicate service and extreme high food
                  quality.
                </Typography>
              </Box>
            </Grid>
            <Grid item lg={7} xs={12}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <img
                  src="https://res.cloudinary.com/dhina/image/upload/v1664781794/waycool/Untitled-1_rrms1p.jpg"
                  alt=""
                  width={"100%"}
                  height={"100%"}
                />
              </Box>
            </Grid>
          </Grid>
          <Box
            className="lineContainer"
            data-aos="fade-up"
            data-aos-duration="2000"
            sx={{ mt: 3 }}
          >
            <Typography
              align="center"
              sx={{
                fontSize: "1.5rem",
                fontWeight: "600",
                color: "#f4474a",
                fontFamily: "Dancing Script, cursive",
              }}
              className="line"
            >
              Team
            </Typography>
          </Box>
          <Typography
            data-aos="fade-down"
            data-aos-duration="2000"
            variant="h4"
            align="center"
            mt={1}
            sx={{ fontWeight: "600" }}
          >
            Peoples you may work with
          </Typography>
          <Grid container sx={{ padding: "30px 30px 5px 30px" }} spacing={3}>
            <Grid item xs={12} sm={6} md={4} lg={3} mb={8} mt={1}>
              <Box className="cover" component="div">
                <img
                  src={
                    "https://res.cloudinary.com/dkz3uzlnp/image/upload/v1660627974/food-bang/mine2_ov8zeb.jpg"
                  }
                  alt=""
                  width="100%"
                  height="100%"
                />
                <Box component="div" className="effect">
                  <Typography className="effect2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Praesentium alias omnis officia, dolore reprehenderit
                    laboriosam, dolorem fugit, quis adipisci rem dolor. Ratione
                    consequatur itaque incidunt atque.
                  </Typography>
                </Box>
              </Box>
              <Typography component="div" variant="h5" textAlign="left" py={1}>
                Kiran
              </Typography>

              <Box component="div">
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-twitter"
                    style={{ fontSize: "20px", margin: "5px 25px 0px 0px" }}
                    href="/"
                  ></i>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/kiran-v-6273a3165/"
                  target="_blank"
                  sx={{ color: "#f4474a" }}
                >
                  <i
                    className="fa-brands fa-linkedin-in"
                    style={{ fontSize: "20px", margin: "5px 5px 0px 0px" }}
                  ></i>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} mb={8} mt={1}>
              <Box className="cover" component="div">
                <img
                  src={
                    "https://res.cloudinary.com/dhina/image/upload/v1664779949/waycool/IMG20220309105535_qaeboj.jpg"
                  }
                  alt=""
                  width="100%"
                  height="100%"
                />
                <Box component="div" className="effect">
                  <Typography className="effect2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Praesentium alias omnis officia, dolore reprehenderit
                    laboriosam, dolorem fugit, quis adipisci rem dolor. Ratione
                    consequatur itaque incidunt atque.
                  </Typography>
                </Box>
              </Box>
              <Typography component="div" variant="h5" textAlign="left" py={1}>
                Dhinakaran
              </Typography>

              <Box component="div">
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-twitter"
                    style={{ fontSize: "20px", margin: "5px 25px 0px 0px" }}
                    href="/"
                  ></i>
                </Link>
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-linkedin-in"
                    style={{ fontSize: "20px", margin: "5px 5px 0px 0px" }}
                  ></i>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} mb={8} mt={1}>
              <div className="cover">
                <img
                  src={
                    "https://res.cloudinary.com/dkz3uzlnp/image/upload/v1665645428/food-multi/sreenivas_ilbgrs.jpg"
                  }
                  alt=""
                  width="100%"
                  height="100%"
                />
                <Box component="div" className="effect">
                  <Typography className="effect2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Praesentium alias omnis officia, dolore reprehenderit
                    laboriosam, dolorem fugit, quis adipisci rem dolor. Ratione
                    consequatur itaque incidunt atque.
                  </Typography>
                </Box>
              </div>
              <Typography component="div" variant="h5" textAlign="left" py={1}>
                Sreenivas
              </Typography>

              <Box component="div">
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-twitter"
                    style={{ fontSize: "20px", margin: "5px 25px 0px 0px" }}
                    href="/"
                  ></i>
                </Link>
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-linkedin-in"
                    style={{ fontSize: "20px", margin: "5px 5px 0px 0px" }}
                  ></i>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} mb={8} mt={1}>
              <div className="cover">
                <img
                  src={
                    "https://res.cloudinary.com/dkz3uzlnp/image/upload/v1665648364/food-multi/shivu_emzffd.png"
                  }
                  alt=""
                  width="100%"
                  height="100%"
                />
                <Box component="div" className="effect">
                  <Typography className="effect2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Praesentium alias omnis officia, dolore reprehenderit
                    laboriosam, dolorem fugit, quis adipisci rem dolor. Ratione
                    consequatur itaque incidunt atque.
                  </Typography>
                </Box>
              </div>
              <Typography component="div" variant="h5" textAlign="left" py={1}>
                ShivaKumar
              </Typography>
              <Box component="div">
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-twitter"
                    style={{ fontSize: "20px", margin: "5px 25px 0px 0px" }}
                    href="/"
                  ></i>
                </Link>
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-linkedin-in"
                    style={{ fontSize: "20px", margin: "5px 5px 0px 0px" }}
                  ></i>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3} mb={8} mt={1}>
              <div className="cover">
                <img
                  src={
                    "https://res.cloudinary.com/dkz3uzlnp/image/upload/v1665645688/food-multi/sid_g9d8to.jpg"
                  }
                  alt=""
                  width="100%"
                  height="100%"
                />
                <Box component="div" className="effect">
                  <Typography className="effect2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Praesentium alias omnis officia, dolore reprehenderit
                    laboriosam, dolorem fugit, quis adipisci rem dolor. Ratione
                    consequatur itaque incidunt atque.
                  </Typography>
                </Box>
              </div>
              <Typography component="div" variant="h5" textAlign="left" py={1}>
                Sidharth
              </Typography>

              <Box component="div">
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-twitter"
                    style={{ fontSize: "20px", margin: "5px 25px 0px 0px" }}
                    href="/"
                  ></i>
                </Link>
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-linkedin-in"
                    style={{ fontSize: "20px", margin: "5px 5px 0px 0px" }}
                  ></i>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} mb={8} mt={1}>
              <Box className="cover" component="div">
                <img
                  src={
                    "https://res.cloudinary.com/dkz3uzlnp/image/upload/v1665645607/food-multi/praveen_u2nn62.jpg"
                  }
                  alt=""
                  width="100%"
                  height="100%"
                />
                <Box component="div" className="effect">
                  <Typography className="effect2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Praesentium alias omnis officia, dolore reprehenderit
                    laboriosam, dolorem fugit, quis adipisci rem dolor. Ratione
                    consequatur itaque incidunt atque.
                  </Typography>
                </Box>
              </Box>
              <Typography component="div" variant="h5" textAlign="left" py={1}>
                Praveen
              </Typography>

              <Box component="div">
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-twitter"
                    style={{ fontSize: "20px", margin: "5px 25px 0px 0px" }}
                    href="/"
                  ></i>
                </Link>
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-linkedin-in"
                    style={{ fontSize: "20px", margin: "5px 5px 0px 0px" }}
                  ></i>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} mb={8} mt={1}>
              <div className="cover">
                <img
                  src={
                    "https://res.cloudinary.com/dkz3uzlnp/image/upload/v1665645429/food-multi/akshay_yg3qme.jpg"
                  }
                  alt=""
                  width="100%"
                  height="100%"
                />
                <Box component="div" className="effect">
                  <Typography className="effect2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Praesentium alias omnis officia, dolore reprehenderit
                    laboriosam, dolorem fugit, quis adipisci rem dolor. Ratione
                    consequatur itaque incidunt atque.
                  </Typography>
                </Box>
              </div>
              <Typography component="div" variant="h5" textAlign="left" py={1}>
                Akshay
              </Typography>

              <Box component="div">
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-twitter"
                    style={{ fontSize: "20px", margin: "5px 25px 0px 0px" }}
                    href="/"
                  ></i>
                </Link>
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-linkedin-in"
                    style={{ fontSize: "20px", margin: "5px 5px 0px 0px" }}
                  ></i>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} mb={8} mt={1}>
              <div className="cover">
                <img
                  src={
                    "https://res.cloudinary.com/dkz3uzlnp/image/upload/v1665645429/food-multi/vinod_e58u2m.jpg"
                  }
                  alt=""
                  width="100%"
                  height="100%"
                />
                <Box component="div" className="effect">
                  <Typography className="effect2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Praesentium alias omnis officia, dolore reprehenderit
                    laboriosam, dolorem fugit, quis adipisci rem dolor. Ratione
                    consequatur itaque incidunt atque.
                  </Typography>
                </Box>
              </div>
              <Typography component="div" variant="h5" textAlign="left" py={1}>
                Vinod
              </Typography>

              <Box component="div">
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-twitter"
                    style={{ fontSize: "20px", margin: "5px 25px 0px 0px" }}
                    href="/"
                  ></i>
                </Link>
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-linkedin-in"
                    style={{ fontSize: "20px", margin: "5px 5px 0px 0px" }}
                  ></i>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} mb={8} mt={1}>
              <div className="cover">
                <img
                  src={
                    "https://res.cloudinary.com/dkz3uzlnp/image/upload/v1665645429/food-multi/sachin_ntyvga.jpg"
                  }
                  alt=""
                  width="100%"
                  height="100%"
                />
                <Box component="div" className="effect">
                  <Typography className="effect2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Praesentium alias omnis officia, dolore reprehenderit
                    laboriosam, dolorem fugit, quis adipisci rem dolor. Ratione
                    consequatur itaque incidunt atque.
                  </Typography>
                </Box>
              </div>
              <Typography component="div" variant="h5" textAlign="left" py={1}>
                Sachin
              </Typography>

              <Box component="div">
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-twitter"
                    style={{ fontSize: "20px", margin: "5px 25px 0px 0px" }}
                    href="/"
                  ></i>
                </Link>
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-linkedin-in"
                    style={{ fontSize: "20px", margin: "5px 5px 0px 0px" }}
                  ></i>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} mb={8} mt={1}>
              <div className="cover">
                <img
                  src={
                    "https://res.cloudinary.com/dkz3uzlnp/image/upload/v1665648364/food-multi/sumanth_rgtoqu.jpg"
                  }
                  alt=""
                  width="100%"
                  height="100%"
                />
                <Box component="div" className="effect">
                  <Typography className="effect2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Praesentium alias omnis officia, dolore reprehenderit
                    laboriosam, dolorem fugit, quis adipisci rem dolor. Ratione
                    consequatur itaque incidunt atque.
                  </Typography>
                </Box>
              </div>
              <Typography component="div" variant="h5" textAlign="left" py={1}>
                Sumanth
              </Typography>
              <Box component="div">
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-twitter"
                    style={{ fontSize: "20px", margin: "5px 25px 0px 0px" }}
                    href="/"
                  ></i>
                </Link>
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-linkedin-in"
                    style={{ fontSize: "20px", margin: "5px 5px 0px 0px" }}
                  ></i>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} mb={8} mt={1}>
              <div className="cover">
                <img
                  src={
                    "https://res.cloudinary.com/dkz3uzlnp/image/upload/v1665645911/food-multi/rohit_farngc.jpg"
                  }
                  alt=""
                  width="100%"
                  height="100%"
                />
                <Box component="div" className="effect">
                  <Typography className="effect2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Praesentium alias omnis officia, dolore reprehenderit
                    laboriosam, dolorem fugit, quis adipisci rem dolor. Ratione
                    consequatur itaque incidunt atque.
                  </Typography>
                </Box>
              </div>
              <Typography component="div" variant="h5" textAlign="left" py={1}>
                Rohit
              </Typography>
              <Box component="div">
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-twitter"
                    style={{ fontSize: "20px", margin: "5px 25px 0px 0px" }}
                    href="/"
                  ></i>
                </Link>
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-linkedin-in"
                    style={{ fontSize: "20px", margin: "5px 5px 0px 0px" }}
                  ></i>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={3} mb={8} mt={1}>
              <div className="cover">
                <img
                  src={
                    "https://res.cloudinary.com/dkz3uzlnp/image/upload/v1665645911/food-multi/akesh_ongkpl.jpg"
                  }
                  alt=""
                  width="100%"
                  height="100%"
                />
                <Box component="div" className="effect">
                  <Typography className="effect2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Praesentium alias omnis officia, dolore reprehenderit
                    laboriosam, dolorem fugit, quis adipisci rem dolor. Ratione
                    consequatur itaque incidunt atque.
                  </Typography>
                </Box>
              </div>
              <Typography component="div" variant="h5" textAlign="left" py={1}>
                Akesh
              </Typography>

              <Box component="div">
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-twitter"
                    style={{ fontSize: "20px", margin: "5px 25px 0px 0px" }}
                    href="/"
                  ></i>
                </Link>
                <Link href="/" sx={{ color: "#f4474a" }}>
                  <i
                    className="fa-brands fa-linkedin-in"
                    style={{ fontSize: "20px", margin: "5px 5px 0px 0px" }}
                  ></i>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default About;
