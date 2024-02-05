"use client";
import {
  Container,
  Grid,
  Typography,
  Paper,
  ImageListItem,
  ImageListItemBar,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem
} from "@mui/material";
import Image from "next/image";
import { Masonry } from "@mui/lab";
import React, { useState } from "react";
import ContactComp from "@/app/components/ContactComp";
import BottomControll from "@/app/components/BottomControll";
import Swipper4 from "@/app/components/swippper/Swipper4";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

const Page = ({ params }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { title } = params;
  const regex = /[%]\d+/gi;
  const goodTitle = title.replace(regex, " ");

  const scrollUSer = () => {
    const target = document.getElementById("contact");

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else alert("no soleil");
  };

  return (
    <>
      <Container className="pt-[65px]">
        <Stack
          flexDirection={{ xs: "column", sm: "row", md: "row" }}
          spacing={5}
          width={"100%"}
          alignItems={"center"}
        >
          <Stack width={{ xs: "100%", sm: "50%", md: "50%" }} spacing={2}>
            <Typography variant="h4" gutterBottom textAlign={"center"}>
              Wintana Commercial Retailer Rooms
            </Typography>
            <Typography className=" pr-3">
              Welcome to the vibrant first-floor retail space at Wintana
              Apartment! This expansive commercial hall offers retailers a
              dynamic environment to showcase their products. Clever
              partitioning allows businesses to create unique sections,
              providing residents and visitors with a diverse and engaging
              shopping experience.
            </Typography>
            <Typography className=" pr-3">
              Discover a versatile retail hub that caters to various businesses,
              from fashion to electronics. Located for maximum accessibility,
              this retail space enhances the Wintana community, creating a
              bustling marketplace right at the heart of the apartment complex.
            </Typography>
            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                color="success"
                onClick={() => setIsOpen(true)}
              >
                Book Room Now
              </Button>
              <Button variant="contained" color="info" onClick={scrollUSer}>
                Contact Us
              </Button>
            </Stack>
          </Stack>

          <ImageListItem sx={{ width: { xs: "100%", sm: "50%", md: "50%" } }}>
            <Swiper
              modules={[Pagination, Autoplay]}
              SlidePerView={1}
              loop={true}
              autoplay={{ delay: 2500 }}
            >
              <SwiperSlide>
                <Image
                  src={"/retailer2.jpeg"}
                  alt={`commerial hub`}
                  width={200}
                  height={300}
                  className="w-[100%] h-auto"
                />
                <ImageListItemBar title="Commercial room 1" />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/retailer2.jpeg"}
                  alt={`commerial hub`}
                  width={200}
                  height={300}
                  className="w-[100%] h-auto"
                />
                <ImageListItemBar title="Commercial room 2" />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/reatiler3.jpeg"}
                  alt={`commerial hub`}
                  width={200}
                  height={300}
                  className="w-[100%] h-auto"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/retailer1.jpeg"}
                  alt={`commerial hub`}
                  width={200}
                  height={300}
                  className="w-[100%] h-auto"
                />
                <ImageListItemBar title="Commercial room 3" />
              </SwiperSlide>
            </Swiper>
          </ImageListItem>
        </Stack>

        <Swipper4 />
      </Container>
      s{/* <BottomControll /> */}
      <ContactComp visible={true} />
      <Dialog open={isOpen} onClose={() => setIsOpen(false)} fullWidth>
        <DialogTitle>Book your room with us today</DialogTitle>
        <DialogContent>
          <Stack spacing={1}>
            <TextField label="Enter Your Name" fullWidth marginTop={"10px"} />
            <TextField
              label="Enter Your Phone Number"
              fullWidth
              marginTop={"10px"}
            />
            <TextField label="Enter Your Email" fullWidth marginTop={"10px"} />
            <TextField
              label="What are You interested in (Rent/Buy)"
              fullWidth
              select
            >
              <MenuItem>Rent this room</MenuItem>
              <MenuItem>Buy this room</MenuItem>
            </TextField>
            <TextField
              label="Enter Your Phone Message"
              fullWidth
              multiline
              rows={4}
            />
            <DialogActions>
              <Button
                className="bg-green-500"
                variant="contained"
                color="secondary"
              >
                Send Enquiry
              </Button>
            </DialogActions>
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Page;
