// Import the Masonry component from @mui/lab
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
import React from "react";

const SportAndLeisure = () => {
  const imagePaths = [
    { path: "/bar.webp", service: "Bar restaurant",open:false },
    { path: "/massage.jpeg", service: "Massage",open:false },
    { path: "/sauna2.jpeg", service: "Sauna",open:false },
    { path: "/sauna.webp", service: "Sauna & Massage",open:false },
    { path: "/room3.jpeg", service: "Accomodation",open:true },
  ];

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
      <Masonry columns={{ xs: 3, sm: 4, md: 5 }} gap={16}>
        {imagePaths.map((item, index) => (
          <ImageListItem key={index} className="relative">
            <Image
              src={item.path}
              alt={`Image ${index + 1}`}
              width={300}
              height={index % 2 === 0 ? 400 : 300}
            />
            <ImageListItemBar
              title={item.service}
              sx={{ height: { xs: "30px", sm: "35px", md: "40px" } }}
            />
            {item.open ?
              <p className="bg-green-700 text-white absolute px-3 py-1 rounded-md top-0 right-0">Open Now</p>
              :
              <p className="bg-red-700 text-white absolute px-3 py-1 rounded-md top-0 right-0">Openning Soon</p>}
          </ImageListItem>
        ))}
      </Masonry>
    </Container>
  );
};

export default SportAndLeisure;
