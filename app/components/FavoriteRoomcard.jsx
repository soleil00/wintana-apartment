"use client";

import { Grid, Paper } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const FavoriteRoomcard = ({ room }) => {
  const [hovered, setIsHovered] = useState(false);
  const navigator = useRouter();
  return (
    <Grid
      item
      xs={6}
      sm={4}
      md={3}
      lg={2}
      className="flex flex-col"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Paper
        className="h-auto rounded-md soleil-shadow relative"
        sx={{ width: "100%" }}
      >
        <Image
          src={room.image}
          alt="imag"
          width={300}
          height={400}
          className="h-[180px] rounded-t-[10px]"
        />
        <div className="px-4 py-2">
          <h3>{room.name}</h3>
          <p className="absolute top-2 right-2 bg-green-300 px-3 py-2 rounded-md">
            {room.price}$
          </p>
          {hovered && (
            <p
              onClick={() => navigator.push(`/book/${room.name}`)}
              className="absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-yellow-500 text-white text-[15px] px-3 py-2 rounded-md"
            >
              Book Now
            </p>
          )}
        </div>
      </Paper>
    </Grid>
  );
};

export default FavoriteRoomcard;
