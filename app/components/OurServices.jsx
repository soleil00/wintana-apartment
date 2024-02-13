"use client";

import { Box, Paper, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OurServices = () => {
  return (
    <Link href={"/comming-soon"}>
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
    <Typography>Enjoy a refreshing dip in our pristine swimming pool.</Typography>
  </Stack>
  <Stack marginBottom={"20px"}>
    <h3 className="font-bold text-[25px] ">Accommodation Services(Rent/Buy)</h3>
    <Typography>Relax and unwind in our comfortable accommodations. where you can chooce to rent apartment or buy it</Typography>
  </Stack>
  <Stack marginBottom={"20px"}>
    <h3 className="font-bold text-[25px] ">Commercial Building for Rent</h3>
    <Typography>Explore our commercial spaces for rent, ideal for your business needs.</Typography>
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
      </Link>
  );
};

export default OurServices;
