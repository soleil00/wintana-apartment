"use client";

import { Box, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const OurServices = () => {
  return (
    <Box className="max-w-[1224px] w-full mx-auto">
      <h3 className="py-4 text-[30px] font-bold">Our SerVices</h3>

      <Paper
        className="p-5"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack>
          <Stack marginBottom={"20px"}>
            <Typography>Swimming Pool</Typography>
            <Typography>some lorem for swiiming pols</Typography>
          </Stack>
          <Stack marginBottom={"20px"}>
            <Typography>Accomodation services</Typography>
            <Typography>some lorem for swiiming pols</Typography>
          </Stack>
          <Stack marginBottom={"20px"}>
            <Typography>Commercial buildin for rent</Typography>
            <Typography>some lorem for swiiming pols</Typography>
          </Stack>
        </Stack>
        <Stack>
          <Image alt="image" src="/pool.jpeg" width={400} height={300} />
        </Stack>
      </Paper>
    </Box>
  );
};

export default OurServices;
