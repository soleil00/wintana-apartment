// Import necessary modules

"use client"

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import FooterComp from "@/app/components/FooterComp";
import { Bathroom, Bed, Kitchen, LocationOn, People, Restaurant } from "@mui/icons-material";

// Define the array of thumbnail images
const thumbImages = [
  { path: "/wintana.jpeg", id: 1 },
  { path: "/living-room.webp", id: 2 },
  { path: "/pool.jpeg", id: 3 },
  { path: "/living.webp", id: 4 },
  { path: "/pool2.jpeg", id: 5 },
];

// Define the Page component
const Page = () => {
  // State to track the selected image ID and window width
  const [selectedId, setSelectedId] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Params from the URL
  const params = useParams();

  // Effect to update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box
      className="mt-[65px] min-h-screen max-w-[1224px] w-full mx-auto"
      padding={{ xs: "10px", sm: "10px", md: "10px" }}
    >
      <div>Here is your params: {params.id}</div>
      <Stack
        direction={{ xs: "column", sm: "column", md: "row" }}
        justifyContent="space-between"
      >
        {/* Main Image Section */}
        <Stack width={{ xs: "100%", sm: "100%", md: "50%" }}>
          <Image
            src={thumbImages[selectedId].path}
            alt="image"
            width={100}
            height={100}
            className={
              windowWidth <= 480 ? "h-[200px] w-full" : "h-auto w-full"
            }
          />
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
            paddingY={2}
            width="100%"
            overflowX="scroll"
          >
            {thumbImages.map((thumb, index) => (
              <Image
                key={thumb.id}
                src={thumb.path}
                alt={`Thumbnail ${index + 1}`}
                width={40}
                height={40}
                className={`w-[150px] h-auto border-4 rounded-md ${
                  selectedId === index ? "border-green-600" : ""
                }`}
                onClick={() => setSelectedId(index)}
              />
            ))}
          </Stack>
        </Stack>

        {/* Room Information Section */}
        <Stack width={{ xs: "100%", sm: "100%", md: "50%" }} spacing={2} padding={"10px"}>
          <h3 className="font-bold text-[25px]">Kings room on floor is for everyone to come</h3>
          <Grid container spacing={2} >
            <Grid item xs={4} sm ={3} md={3}  className="flex flex-row justify-center items-center gap-1"><People color="secondary" fontSize={"large"} />
              <p className="text-sm">2 People</p></Grid>
            <Grid item xs={4} sm ={3} md={3}  className="flex flex-row justify-center items-center gap-1"><Bed color="secondary" fontSize={"large"} />
              <p className="text-sm">2 Beds</p></Grid>
            <Grid item xs={4} sm ={3} md={3}  className="flex flex-row justify-center items-center gap-1"><Bathroom color="secondary" fontSize={"large"} />
              <p className="text-sm">1 BathRoom</p></Grid>
            <Grid item xs={4} sm ={3} md={3}  className="flex flex-row justify-center items-center gap-1"><Restaurant color="secondary" fontSize={"large"} />
              <p className="text-sm">1 Toilet</p></Grid>
            <Grid item xs={4} sm ={3} md={3}  className="flex flex-row justify-center items-center gap-1"><Kitchen color="secondary" fontSize={"large"} />
              <p className="text-sm">1 Kitchen</p></Grid>
          </Grid>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
            . Magni voluptate commodi quas delectus quod vel ut, h
            arum accusantium dolore perspiciatis natus laboriosam
            sint eligendi nostrum fugit reprehenderit soluta necess
            itatibus ad.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit
            . Magni voluptate commodi quas delectus quod vel ut, h
            arum accusantium dolore perspiciatis natus laboriosam
            sint eligendi nostrum fugit reprehenderit soluta necess
            itatibus ad.</p>
        </Stack>
      </Stack>

      {/* contact sections  */}
     <Stack>
        <Typography>Contact us Today</Typography>

        <Stack direction={"row"} spacing={2}>
                <LocationOn color="secondary" fontSize="medium"/>
                <Typography>kg 452 st</Typography>
        </Stack>

      </Stack> 

      {/* Footer Component */}
      <FooterComp />
    </Box>
  );
};

export default Page;

     