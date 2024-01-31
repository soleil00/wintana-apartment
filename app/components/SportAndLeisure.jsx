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
    { path: "/bar.webp", service: "Bar restaurant" },
    { path: "/billard.jpeg", service: "Billard" },
    { path: "/massage.jpeg", service: "Massage" },
    { path: "/sauna2.jpeg", service: "Sauna" },
    { path: "/sauna.webp", service: "Sauna & Massage" },
    { path: "/billard2.jpeg", service: "Billard 2" },
    { path: "/room3.jpeg", service: "Accomodation" },
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
          <ImageListItem key={index}>
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
          </ImageListItem>
        ))}
      </Masonry>
    </Container>
  );
};

export default SportAndLeisure;
