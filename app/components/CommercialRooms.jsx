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
          Wintana Apartment&apos;s ground floor is big hub designated
          for commercial uses rented by square
          meters accordingly and its getting ready to become a
          lively place for shops and retailer-servcies. 
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


