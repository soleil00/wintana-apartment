"use client";

// import { Container } from "@mui/material";
// import {useParams } from "next/navigation";
// import React from "react";

// const page = () => {
//   const { title } = useParams();
//   const regex = /[%]\d+/gi;
//   const goodTitle = title.replace(regex, " ");
//   return (
//     <Container className="pt-[65px]">
//       thi is {goodTitle.toUpperCase()}
//     </Container>
//   );
// };

// export default page;

// Import Material-UI components and Lab components
import {
  Container,
  Grid,
  Typography,
  Paper,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Masonry } from "@mui/lab";
// import MasonryItem from "@mui/lab/MasonryItem";
import React from "react";

const Page = () => {
  const { title } = useParams();
  const regex = /[%]\d+/gi;
  const goodTitle = title.replace(regex, " ");

  // Example image paths (replace with your actual image paths)
  const imagePaths = [
    "/wintana.jpeg",
    "/billard.jpeg",
    "/massage.jpeg",
    "/sauna2.jpeg",
    "/sauna.webp",
    "/billard2.jpeg",
    "/room1.jpeg",
  ];

  return (
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
  );
};

export default Page;
