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
    <div className="relative min-h-screen">
      <Container className="pt-[65px]">
        <Stack
          flexDirection={{ xs: "column", sm: "row", md: "row" }}
          spacing={5}
          width={"100%"}
          alignItems={"center"}
        >
          <Stack width={{ xs: "100%", sm: "50%", md: "50%" }} spacing={2}>
            <Typography variant="h4" gutterBottom textAlign={"center"}>
              Wintana Commercial Retailer Area
            </Typography>
            <Typography className=" pr-3">
              Wintana Apartment&apos;s ground floor is a spacious hub designated
              for commercial use, rented by square meters accordingly.
              It&apos;s currently undergoing preparations to transform into a
              vibrant space for shops and retailer services. With its opening
              imminent, this bustling area is set to welcome businesses and
              customers alike
            </Typography>
          
            <Stack direction="row" spacing={2}>
              <Button
                variant="outlined"
                color="success"
                onClick={() => setIsOpen(true)}
              >
                Book Your Space Today
              </Button>
              <Button variant="outlined" color="info" onClick={scrollUSer}>
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
                  src={"/retailer1.jpeg"}
                  alt={`commerial hub`}
                  width={200}
                  height={300}
                  className="w-[100%] h-auto"
                />
                <ImageListItemBar title="Openning Soon" />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/retailer1.jpeg"}
                  alt={`commerial hub`}
                  width={200}
                  height={300}
                  className="w-[100%] h-auto"
                />
                <ImageListItemBar title="Openning Soon" />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/retailer1.jpeg"}
                  alt={`commerial hub`}
                  width={200}
                  height={300}
                  className="w-[100%] h-auto"
                  
                />
                <ImageListItemBar title="Openning Soon" />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={"/retailer1.jpeg"}
                  alt={`commerial hub`}
                  width={200}
                  height={300}
                  className="w-[100%] h-auto"
                />
                <ImageListItemBar title="Openning Soon" />
              </SwiperSlide>
            </Swiper>
          </ImageListItem>
        </Stack>

      </Container>
      <Stack display={{xs:"block",md:"none"}}>
      
        <BottomControll />
        {/* <BottomControll />
        <BottomControll /> */}
       
      </Stack>
      
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

            />
            <DialogActions>
              <Button
                className="bg-green-500"
                variant="outlined"
                color="secondary"
              >
                Send Enquiry
              </Button>
            </DialogActions>
          </Stack>
        </DialogContent>
      </Dialog>
      <ContactComp visible={true} />
    </div>
  );
};

export default Page;
