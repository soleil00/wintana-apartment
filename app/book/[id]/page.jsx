// Import necessary modules

"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Box, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import FooterComp from "@/app/components/FooterComp";
import {
  Bathroom,
  Bed,
  Kitchen,
  LocationOn,
  People,
  Restaurant,
} from "@mui/icons-material";
import ContactComp from "@/app/components/ContactComp";
import BottomControll from "@/app/components/BottomControll";
import DescriptionGenerator from "@/app/components/DescriptionGenerator";

// Define the array of thumbnail images
const thumbImages1 = [
  { path: "/bathroom.jpeg", id: 1 },
  { path: "/kitchen3.jpg", id: 5 },
  { path: "/salon3.jpeg", id: 4 },
  { path: "/salon3.jpeg", id: 4 },
  { path: "/bed4.jpeg", id: 2 },
];
const thumbImages2 = [
  { path: "/bed4.jpeg", id: 2 },
  { path: "/bed5.webp", id: 2 },
  { path: "/bathroom.jpeg", id: 1 },
  { path: "/bathroom.jpeg", id: 1 },
  { path: "/salon3.jpeg", id: 4 },
  { path: "/salon3.jpeg", id: 4 },
  { path: "/kitchen3.jpg", id: 5 },
];
const thumbImages3 = [
  { path: "/bed4.jpeg", id: 2 },
  { path: "/bed4.jpeg", id: 2 },
  { path: "/bed4.jpeg", id: 2 },
  // { path: "/bed5.webp", id: 2 },
  // { path: "/bed5.webp", id: 2 },
  { path: "/bathroom.jpeg", id: 1 },
  { path: "/bathroom.jpeg", id: 1 },
  { path: "/bathroom.jpeg", id: 1 },
  { path: "/kitchen3.jpg", id: 5 },
  { path: "/salon3.jpeg", id: 4 },
  { path: "/salon3.jpeg", id: 4 },
];

// Define the Page component
const Page = () => {
  // State to track the selected image ID and window width
  const [selectedId, setSelectedId] = useState(0);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  let thumbImages;

  const params = useParams();
  const id = +params.id.split("-")[1];

  if (id === 1) {
    thumbImages = thumbImages1;
  } else if (id === 2) {
    thumbImages = thumbImages2;
  } else {
    thumbImages = thumbImages3;
  }

  // Params from the URL

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
    <>
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
              spacing={{ xs: 0, sm: 2, md: 0 }}
              paddingY={1}
              width="100%"
              overflow={"scroll"}
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
          <Stack
            width={{ xs: "100%", sm: "100%", md: "50%" }}
            spacing={2}
            padding={"10px"}
          >
            <h3 className="font-bold text-[25px]">
              Kings room on floor is for everyone to come
            </h3>
            <Grid container spacing={2}>
              <Grid
                item
                xs={6}
                sm={3}
                md={3}
                className="flex flex-row justify-center items-center gap-1"
              >
                <People color="secondary" fontSize={"large"} />
                <p className="text-sm">2 People</p>
              </Grid>
              <Grid
                item
                xs={6}
                sm={3}
                md={3}
                className="flex flex-row justify-center items-center gap-1"
              >
                <Bed color="secondary" fontSize={"large"} />
                <p className="text-sm">2 Beds</p>
              </Grid>
              <Grid
                item
                xs={6}
                sm={3}
                md={3}
                className="flex flex-row justify-center items-center gap-1"
              >
                <Bathroom color="secondary" fontSize={"large"} />
                <p className="text-sm">1 BathRoom</p>
              </Grid>
              <Grid
                item
                xs={6}
                sm={3}
                md={3}
                className="flex flex-row justify-center items-center gap-1"
              >
                <Restaurant color="secondary" fontSize={"large"} />
                <p className="text-sm">1 Toilet</p>
              </Grid>
              <Grid
                item
                xs={6}
                sm={3}
                md={3}
                className="flex flex-row justify-center items-center gap-1"
              >
                <Kitchen color="secondary" fontSize={"large"} />
                <p className="text-sm">1 Kitchen</p>
              </Grid>
            </Grid>
            <DescriptionGenerator
              selectedId={selectedId}
              id={id}
              setSelectedId={setSelectedId}
            />
          </Stack>
        </Stack>

        {/* contact sections  */}

        {/* Footer Component */}
        {/* <FooterComp /> */}
      </Box>
      <BottomControll />
      <ContactComp visible={true} />
    </>
  );
};

export default Page;
