"use client";
import {
  Container,
  Grid,
  Typography,
  Paper,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import Image from "next/image";
import { Masonry } from "@mui/lab";
import React from "react";
import ContactComp from "@/app/components/ContactComp";
import BottomControll from "@/app/components/BottomControll";

const Page = ({ params }) => {
  const { title } = params;
  const regex = /[%]\d+/gi;
  const goodTitle = title.replace(regex, " ");

  // Example image paths (replace with your actual image paths)
  const imagePaths = [
    "/retailer1.jpeg",
    "/retailer2.jpeg",
    "/reatiler3.jpeg",
    // "/massage.jpeg",
    // "/sauna2.jpeg",
    // "/sauna.webp",
    // "/billard2.jpeg",
    // "/room1.jpeg",
  ];

  return (
    <>
      <Container className="pt-[65px]">
        <Typography variant="h4" gutterBottom>
          This is {goodTitle.toUpperCase()}
        </Typography>

        <Masonry columns={{ xs: 3, sm: 4, md: 5 }} gap={16}>
          {imagePaths.map((path, index) => (
            <ImageListItem key={index}>
              <Image
                src={path}
                alt={`Image ${index + 1}`}
                width={300}
                height={index % 2 === 0 ? 400 : 300}
              />
              <ImageListItemBar title={"test"} sx={{ height: "20px" }} />
            </ImageListItem>
          ))}
        </Masonry>
      </Container>
      <BottomControll />
      <ContactComp visible={true} />
    </>
  );
};

export default Page;
