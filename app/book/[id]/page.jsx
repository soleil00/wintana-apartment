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
  Accessibility,
  Accessible,
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


//swipper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

 const thumbImages1 = [
  { path: "/room1/1roomwashroom.jpg", id: 1 },
  { path: "/room1/1roomkitchen.jpg", id: 2 },
  { path: "/room1/1roomsalon.jpg", id: 3 },
  { path: "/room1/1roombed.jpg", id: 4 },
  { path: "/room1/1roomward.jpg", id: 5 },
];

 const thumbImages2 = [
  { path: "/room2/2roombed1.jpg", id: 1 },
  { path: "/room2/2roombed2.jpg", id: 2 },
  { path: "/room2/2roomwashroom1.jpg", id: 3 },
  { path: "/room2/2roomwashroom2.jpg", id: 4 },
  { path: "/room2/2roomsalon1.jpg", id: 5 },
  // { path: "/room2/2roomsalon2.jpg", id: 6 },
  { path: "/room2/2roomdinning.jpg", id: 7 },
  { path: "/room2/2roomkitchen1.jpg", id: 8 },
];

 const thumbImages3 = [
  { path: "/room3/3roombed1.jpg", id: 1 },
  { path: "/room3/3roombed2.jpg", id: 2 },
  { path: "/room3/3roombed3.jpg", id: 3 },
  { path: "/room3/3roomwashroom1.jpg", id: 4 },
  { path: "/room3/3roomwashroom2.jpg", id: 5 },
  { path: "/room3/3roomwashroom3.jpg", id: 6 },
  { path: "/room3/3roomkitchen.jpg", id: 7 },
  { path: "/room3/3roomsalon1.jpg", id: 8 },
  { path: "/room3/3roomsalon2.jpg", id: 9 },
];

const Page = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedId, setSelectedId] = useState(0);
  const [windowWidth, setWindowWidth] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showImage, setShowImage] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)

  let thumbImages;

  const handleshowImage = (id) => {
    setShowImage(true)
    setSelectedImageIndex(id)
  }

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

    
    window.addEventListener("resize", handleResize);



    return () => {
      window.removeEventListener("resize", handleResize);
  
    };
  }, [selectedId, thumbImages]);

  return (
    <div className="relative min-h-screen">
      <Box
        className="mt-[65px] min-h-screen max-w-[1224px] w-full mx-auto"
        padding={{ xs: "10px", sm: "10px", md: "10px" }}
      >
        <div>Click on image bellow to see its full size</div>
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          justifyContent="space-between"
        >
          {/* Main Image Section */}
          <Stack width={{ xs: "100%", sm: "100%", md: "50%" }} className="h-[600px]">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper,slideThumbActiveClass:"testls" }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="h-[80%] w-full"
//               onSlideChange={() => {
//   setSelectedId(prev => (prev + 1) % thumbImages.length);
// }}

            >
              {thumbImages.map((thumb, index) => (
                <SwiperSlide key={index}>
                  <Image
                    key={thumb.id}
                    src={thumb.path}
                    alt={`Thumbnail ${index + 1}`}
                    width={400}
                    height={500}
                    className={`border-4 rounded-md h-[60%] w-[100px] ${
                      selectedId === index ? "border-green-600" : ""
                    }`}
                    onClick={() => handleshowImage(index)}
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
                  <img
                    key={thumb.id}
                    src={thumb.path}
                    alt={`Thumbnail ${index + 1}`}
                    width={40}
                    height={40}
                    className={`w-[150px] h-auto border-4 rounded-md ${
                      selectedId === index ? "" : ""
                    }`}
                    onClick={() => setSelectedId(index)}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

          </Stack>

   
          <Stack
            width={{ xs: "100%", sm: "100%", md: "50%" }}
            spacing={2}
            padding={"10px"}
          >
            <h3 className="font-bold text-[25px]">
              {/* Here is all You can find in Room {id} */}
               Apartment with {id ===1? "Single Room":id === 2 ? "2 rooms" :"3 rooms"} includes the following:
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
              <p className="text-sm">{id ===1?"1 Room":id===2?"2 Rooms":"3 Rooms"}</p>
              </Grid>
              <Grid
                item
                xs={6}
                sm={3}
                md={3}
                className="flex flex-row justify-center items-center gap-1"
              >
                <Bed color="secondary" fontSize={"large"} />
                <p className="text-sm">{id ===1?"1 Bed":id===2?"2 Beds":"3 Beds"}  </p>
              </Grid>
              <Grid
                item
                xs={6}
                sm={3}
                md={3}
                className="flex flex-row justify-center items-center gap-1"
              >
                <Bathroom color="secondary" fontSize={"large"} />
                <p className="text-sm">{id ===1?"1 bathroom":"1 bathroom for each Room"}</p>
              </Grid>
              <Grid
                item
                xs={6}
                sm={3}
                md={3}
                className="flex flex-row justify-center items-center gap-1"
              >
                <Accessible color="secondary" fontSize={"large"} />
                <p className="text-sm">{id ===1?"1 toliet":"1 toilet for each Room"}</p>
              </Grid>
              <Grid
                item
                xs={6}
                sm={3}
                md={3}
                className="flex flex-row justify-center items-center gap-1"
              >
                <Kitchen color="secondary" fontSize={"large"} />
                <p className="text-sm">{id ===1?"1 kitchen":"1 shared kitchen for all"}</p>
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
            label="Enter Your  Message"
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
      {/* <Stack height={{xs:"550px",sm:"500px",md:"100px"}}>
      </Stack> */}
        {/* <BottomControll />
        <BottomControll /> */}
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
              label="Enter Your Message"
              fullWidth
              multiline
              rows={4}
            />
            <DialogActions>
              <Button
                className="bg-green-500"
                variant="contained"
                color="secondary"
                onClick={()=>setIsOpen(false)}
              >
                Send Enquiry
              </Button>
            </DialogActions>
          </Stack>
        </DialogContent>
      </Dialog>

      {/* dialog to show full image details */}
      <Dialog open={showImage} onClose={() => setShowImage(false)} fullWidth>
        
            <Image width={200} height={200} src={thumbImages[selectedImageIndex]?.path} className="w-auto h-auto" alt="selected image her"/>
      </Dialog>
    </div>
  );
};

export default Page;
