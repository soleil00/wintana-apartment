import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WintanIntro from "./components/WintanIntro";
import FavoriteRoom from "./components/FavoriteRoom";
import OurServices from "./components/OurServices";

export default function Home() {
  return (
    <main className="">
      
      <HeroSection />
      <WintanIntro />
      
      {/* favorite romm sections */}
      <FavoriteRoom />
      <OurServices/>
    </main>
  );
}
