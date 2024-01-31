import { Bed } from "@mui/icons-material";
import { Paper, Stack } from "@mui/material";
import Image from "next/image";
import React from "react";

const CommercialRoomCard = ({ path, room }) => {
  return (
    <Paper
      sx={{
        width: { xs: "90%", sm: "30%", md: "30%" },
        padding: { xs: "10px", sm: "10px", md: "0px" },
      }}
    >
      <Image
        alt="commecial"
        width={200}
        height={200}
        src={path}
        className="w-[100%] h-auto"
      />
      <Stack
        padding={2}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={1}
      >
        <h3>Room {room}</h3>
        <p>Commercial retailer Room</p>
        <Stack>
          <Bed fontSize="small" color="secondary" />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default CommercialRoomCard;
