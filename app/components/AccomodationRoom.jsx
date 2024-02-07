// pages/FirstFloor.js
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import AccomodationRoomCard from "./AccomodationRoomCard";

const cardStyles = {
  maxWidth: 345,
};

const imageStyles = {
  height: 140,
};

const AccomodationRoom = () => {
  return (
    <Container>
      <Typography
        variant="h5"
        gutterBottom
        py={"20px"}
        textAlign={{ xs: "center", sm: "start", md: "start" }}
      >
        Welcome to Wintana Residential Area
      </Typography>

      <Typography
        className="py-2 text-gray-400"
        textAlign={{ xs: "center", sm: "start", md: "start" }}
      >
        Explore Wintana Apartments residential area,Wintana accomodation
        services consist of 3 floors designed for accomodations starting from
        First to Fourth floors
      </Typography>
      <Typography
        className="py-2 text-gray-600"
        textAlign={{ xs: "center", sm: "start", md: "start" }}
      >
        Each Floor has 3 Rooms which are described below:
      </Typography>
      <Typography
        className="pb-2 text-slate-400"
        textAlign={{ xs: "center", sm: "start", md: "start" }}
      >
        The first room for single person made up of{" "}
        <span className="font-bold">1 bedrooms</span>, the second provides{" "}
        <span className="font-bold">2 bedrooms</span>, and the third is a
        spacious retreat with <span className="font-bold">3 bedrooms</span>.
        Each room has 1 kitchen, 1 bathroom and 1 Toilet.
      </Typography>
      <Grid container spacing={2}>
        <AccomodationRoomCard
          path={"/apartment/view2.png"}
          display={{ xs: 6, sm: 4, md: 4 }}
          title={"Floor 1"}
          link={"/floors/floor-1"}
          rooms={1}
        />
        <AccomodationRoomCard
          path={"/apartment/view3.png"}
          display={{ xs: 6, sm: 4, md: 4 }}
          title={"Floor 2"}
          link={"/floors/floor-2"}
          rooms={2}
        />
        <AccomodationRoomCard
          path={"/apartment/view4.png"}
          display={{ xs: 6, sm: 4, md: 4 }}
          title={"Floor 3"}
          link={"/floors/floor-3"}
          rooms={3}
        />
        {/* <AccomodationRoomCard
          path={"/living-room.webp"}
          display={{ xs: 6, sm: 4, md: 3 }}
          title={"Floor 4"}
          link={"/"}
        /> */}
        {/* <AccomodationRoomCard
          path={"/room1.jpeg"}
          display={{ xs: 6, sm: 4, md: 3 }}
          title={"Floor 5"}
          link={"/"}
        /> */}
      </Grid>
    </Container>
  );
};

export default AccomodationRoom;
