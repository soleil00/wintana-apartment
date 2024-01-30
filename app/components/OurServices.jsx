"use client";

import { Box, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const OurServices = () => {
  return (
    <Box className="max-w-[1224px] w-full mx-auto" sx={{paddingX:{xs:"10px",sm:"0px",md:"opx"}}}>
      <h3 className="py-4 text-[30px] font-bold text-center">Our SerVices</h3>

      <Paper
        className="p-5"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: { xs: "column", sm: "column", md: "row" }
          
        }}
      >
        <Stack>
          <Stack marginBottom={"20px"}>
            <Typography className="font-bold text-[25px] ">Swimming Pool</Typography>
            <Typography>some lorem for swiiming pols</Typography>
          </Stack>
          <Stack marginBottom={"20px"}>
            <Typography className="font-bold text-[25px] ">Accomodation services</Typography>
            <Typography>some lorem for swiiming pols</Typography>
          </Stack>
          <Stack marginBottom={"20px"}>
            <Typography className="font-bold text-[25px] ">Commercial buildin for rent</Typography>
            <Typography>some lorem for swiiming pols</Typography>
          </Stack>
        </Stack>
        <Stack>
          <Image alt="image" src="/pool.jpeg" width={400} height={300}  className="w-full h-auto"/>
        </Stack>
      </Paper>
    </Box>
  );
};

export default OurServices;
