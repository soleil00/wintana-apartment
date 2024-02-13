import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import CommercialRoomCard from "./CommercialRoomCard";
import AccomodationRoomCard from "./AccomodationRoomCard";

const CommercialRooms = () => {
  return (
    <Container>
      <Stack spacing={2} padding={{ xs: "10px" }}>
        <Typography variant="h4">Wintana Commercial Retailer Area</Typography>
        <Typography className="py-2 text-gray-500">
          Welcome to the bustling commercial hub at Wintana Apartments ground
          floor. Tailored for retailers seeking a dynamic business environment,
          these spacious and well-designed rooms offer the perfect setting to
          showcase your products. Join us in this vibrant space on the ground
          floor and elevate your retail experience at Wintana Apartments
        </Typography>
      </Stack>

      <Grid container spacing={2}>
       
        <AccomodationRoomCard
          path={"/retailer1.jpeg"}
          room={4}
          display={{ xs: 12, sm: 6, md: 4 }}
          title={"Commercial Retail Room"}
          type={"commercial"}
          link={"/floors/commercial/commercial-room-2"}
          available={true}
        />
       
      </Grid>
    </Container>
  );
};

export default CommercialRooms;


