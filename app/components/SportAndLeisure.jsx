// Import the Masonry component from @mui/lab
"use client"


import { Masonry } from "@mui/lab";

import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Paper,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SportAndLeisure = () => {
  const imagePaths = [
    { path: "/bar.webp", service: "Bar restaurant",open:false },
    { path: "/massage.jpeg", service: "Sauna & Massage",open:false },
    { path: "/gym.jpg", service: "Gym",open:false },
    { path: "/poster.jfif", service: "Elevator",open:false },
    { path: "/coffe.jpg", service: "Coffee Shop",open:false },
    { path: "/room3.jpeg", service: "Accomodation",open:true },
  ];

  const navigator = useRouter()
  
   const scrollUser=()=>{
    const target=document.getElementById("accomodation")
    if (target) {
      target.scrollIntoView({behavior:"smooth"})
    }
  }

  return (
    <Container className="max-w-[1224px] w-full mx-auto">
      <Typography
        variant="h5"
        gutterBottom
        py={"20px"}
        textAlign={{ xs: "center", sm: "start", md: "start" }}
        fontWeight={"bold"}
      >
        Welcome to Wintana Sport and Leisure Area
      </Typography>

      {/* Use Masonry component instead of ImageList */}
      <Masonry columns={{ xs: 2, sm: 3, md: 5 }} gap={16}>
        {imagePaths.map((item, index) => (
          <ImageListItem key={index} className="relative">
            <Image
              src={item.path}
              alt={`Image ${index + 1}`}
              width={300}
              height={index % 2 === 0 ? 400 : 300}
              onClick={() => {
                if (item.open) {
                  scrollUser()
                } else navigator.push("/comming-soon")
              }}
            />
            <ImageListItemBar
              title={item.service}
              sx={{ height: { xs: "30px", sm: "35px", md: "40px" } }}
            />
            {item.open ?
              <p className="bg-green-700 whitespace-nowrap text-white md:px-1 absolute px-1 py-0.5 rounded-md top-0 right-0">Open Now</p>
              :
              <p className="bg-red-700 text-white absolute px-3 md:px-1 py-1 rounded-md top-0 right-0">Openning Soon</p>}
          </ImageListItem>
        ))}
      </Masonry>
    </Container>
  );
};

export default SportAndLeisure;
