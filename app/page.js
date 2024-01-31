'use client'

import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WintanIntro from "./components/WintanIntro";
import FavoriteRoom from "./components/FavoriteRoom";
import OurServices from "./components/OurServices";
import FooterComp from "./components/FooterComp";
import BottomControll from "./components/BottomControll";
import { useEffect } from "react";
import { getLocation } from "@/lib/location";
import CommercialRooms from "./components/CommercialRooms";
import AccomodationRoom from "./components/AccomodationRoom";
import SportAndLeisure from "./components/SportAndLeisure";

export default function Home() {

  useEffect(() => {

    console.log("from calling : ",getLocation())
  
},[])

  return (
    <main className="relative">
      
      <HeroSection />
      <WintanIntro />
      
      
      {/* commercial room section */}
      <CommercialRooms />
      
      {/* accomodation rooms */}
      <AccomodationRoom />
      
      {/* sport and leasure room sections */}
      <SportAndLeisure/>

      {/* <FavoriteRoom /> */}
      <OurServices />

      {/* footer */}
      <BottomControll/>
     <FooterComp/>
    </main>
  );
}
