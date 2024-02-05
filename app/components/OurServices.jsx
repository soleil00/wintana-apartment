"use client";

import { Box, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const OurServices = () => {
  return (
    <Box
      className="max-w-[1224px] w-full mx-auto"
      sx={{ paddingX: { xs: "10px", sm: "0px", md: "opx" } }}
      id="service"
    >
      <h3 className="py-4 text-[30px] font-bold text-center">Our SerVices</h3>

      <Paper
        className="p-5"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "column", md: "row" },
        }}
      >
        <Stack>
          <Stack marginBottom={"20px"}>
            <h3 className="font-bold text-[25px] ">Swimming Pool</h3>
            <Typography>some lorem for swiiming pols</Typography>
          </Stack>
          <Stack marginBottom={"20px"}>
            <h3 className="font-bold text-[25px] ">Accomodation services</h3>
            <Typography>some lorem for swiiming pols</Typography>
          </Stack>
          <Stack marginBottom={"20px"}>
            <h3 className="font-bold text-[25px] ">
              Commercial buildin for rent
            </h3>
            <Typography>some lorem for swiiming pols</Typography>
          </Stack>
        </Stack>
        <Stack>
          <Image
            alt="image"
            src="/pool.jpeg"
            width={400}
            height={300}
            className="w-full h-auto"
          />
        </Stack>
      </Paper>
    </Box>
  );
};

export default OurServices;
