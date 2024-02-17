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
    <Container id="accomodation">
      <Typography
        variant="h5"
        gutterBottom
        py={"20px"}
        textAlign={{ xs: "center", sm: "start", md: "start" }}
        
      >
        Welcome to Wintana Residential Area
      </Typography>

      <Typography
        className="py-2 text-gray-500"
        textAlign={{ xs: "center", sm: "start", md: "start" }}
      >
        
        Explore Wintana Apartments' residential area, where accommodation
        services are spread across three floors, from the first to
        the third. Additionally, there's a fourth floor featuring a
        luxurious penthouse for an elevated living experience
      </Typography>
     
    
      <Grid container spacing={2}>
        <AccomodationRoomCard
          path={"/apartment/view2.png"}
          display={{ xs: 6, sm: 4, md: 4 }}
          title={"First floor apartments"}
          link={"/floors/floor-1"}
          rooms={1}
        />
        <AccomodationRoomCard
          path={"/apartment/view3.png"}
          display={{ xs: 6, sm: 4, md: 4 }}
          title={"Second floor apartments"}
          link={"/floors/floor-2"}
          rooms={2}
        />
        <AccomodationRoomCard
          path={"/apartment/view4.png"}
          display={{ xs: 6, sm: 4, md: 4 }}
          title={"Third floor apartments"}
          link={"/floors/floor-3"}
          rooms={3}
        />
        <AccomodationRoomCard
          path={"/apartment/view4.png"}
          display={{ xs: 6, sm: 4, md: 4 }}
          title={"Pent house(fourth floor) "}
          link={"/floors/floor-3"}
          rooms={3}
          pent={true}
        />
       
      </Grid>
    </Container>
  );
};

export default AccomodationRoom;
