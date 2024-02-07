'use client'
import HeroSection from "./components/HeroSection";
import WintanIntro from "./components/WintanIntro";

import OurServices from "./components/OurServices";

import BottomControll from "./components/BottomControll";
import { useEffect } from "react";
import { getLocation } from "@/lib/location";
import CommercialRooms from "./components/CommercialRooms";
import AccomodationRoom from "./components/AccomodationRoom";
import SportAndLeisure from "./components/SportAndLeisure";
import ContactComp from "./components/ContactComp";

//swipper imports
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/scrollbar';
import Swipper3 from "./components/swippper/Swipper3";
import Swipper2 from "./components/swippper/Swipper2";
import Swipper1 from "./components/swippper/Swipper1";
import Swipper4 from "./components/swippper/Swipper4";


export default function Home() {

  useEffect(() => {

    console.log("from calling : ",getLocation())
  
},[])

  return (
    <main className="relative">
      
      <Swiper modules={[Pagination, Autoplay]}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 2500 }}
        // pagination={{ clickable: true }}
      >

        <SwiperSlide>
          <HeroSection />
        </SwiperSlide>
        <SwiperSlide>
          <Swipper3 />
        </SwiperSlide>
        <SwiperSlide>
          <Swipper2 />
        </SwiperSlide>
        <SwiperSlide>
          <Swipper1 />
        </SwiperSlide>
        <SwiperSlide>
          <Swipper4 />
        </SwiperSlide>

      </Swiper>
      
      


      <WintanIntro />
      
      
      {/* commercial room section */}
      <CommercialRooms />
      
      {/* accomodation rooms */}
      <AccomodationRoom />
      
      {/* sport and leasure room sections */}
      <SportAndLeisure/>

      {/* <FavoriteRoom /> */}
      <OurServices />

      {/* contact page */}
      <BottomControll/>
      <ContactComp visible={"soleil"} />

      {/* footer */}
     {/* <FooterComp/> */}
    </main>
  );
}



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