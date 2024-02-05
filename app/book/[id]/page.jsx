// Import necessary modules

"use client";

import React, { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import {
  Box,
  Grid,
  Stack,
  Typography,
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
} from "@mui/material";
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
import { thumbImages1, thumbImages2, thumbImages3 } from "@/constants/images";

//swipper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const Page = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedId, setSelectedId] = useState(0);
  const [windowWidth, setWindowWidth] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

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

  const scrollUSer = () => {
    const target = document.getElementById("contact");

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const intervalId = setInterval(() => {
      if (selectedId === thumbImages?.length - 1) {
        setSelectedId(0);
      } else {
        setSelectedId((prev) => prev + 1);
      }
    }, 3000);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearInterval(intervalId);
    };
  }, [selectedId, thumbImages]);

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
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {thumbImages.map((thumb, index) => (
                <SwiperSlide key={index}>
                  <Image
                    key={thumb.id}
                    src={thumb.path}
                    alt={`Thumbnail ${index + 1}`}
                    width={400}
                    height={400}
                    className={`border-4 rounded-md ${
                      selectedId === index ? "border-green-600" : ""
                    }`}
                    onClick={() => setSelectedId(index)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {thumbImages.map((thumb, index) => (
                <SwiperSlide key={index}>
                  <Image
                    key={thumb.id}
                    src={thumb.path}
                    alt={`Thumbnail ${index + 1}`}
                    width={40}
                    height={40}
                    className={`w-[150px] h-auto border-4 rounded-md ${
                      selectedId === index ? "border-green-600" : ""
                    }`}
                    // onClick={() => setSelectedId(index)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* <Image
              src={thumbImages[selectedId].path}
              alt="image"
              width={100}
              height={100}
              className={
                windowWidth <= 480 ? "h-[250px] w-full" : "h-auto w-full"
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
            </Stack> */}
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

        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="success"
            onClick={() => setIsOpen(true)}
            className="bg-yellow-500"
          >
            Get Price Of This Room Today😎
          </Button>
          <Button
            variant="contained"
            color="info"
            onClick={scrollUSer}
            className="bg-yellow-500"
          >
            COntact us
          </Button>
        </Stack>
        <Stack
          spacing={2}
          marginTop={"15px"}
          justifyContents={"center"}
          width={{ xs: "100%", sm: "70%", md: "50%" }}
          margin={"auto"}
        >
          <Typography textAlign={"center"} sx={{ marginTop: "20px" }}>
            {" "}
            Fill This Form To Book Your Reservation
          </Typography>
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
      </Box>
      {/* <BottomControll /> */}
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
