// Import necessary modules

"use client"

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import FooterComp from "@/app/components/FooterComp";

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
      padding={{ xs: "10px", sm: "10px", md: "0px" }}
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
              windowWidth <= 480 ? "h-[200px] w-full" : "h-[350px] w-full"
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
        <Stack>
          <h3>Kings room on floor</h3>
          <Typography>Here is room specification</Typography>
        </Stack>
      </Stack>

      {/* Footer Component */}
      <FooterComp />
    </Box>
  );
};

// Export the Page component
export default Page;
