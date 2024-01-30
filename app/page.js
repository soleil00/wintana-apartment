import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WintanIntro from "./components/WintanIntro";
import FavoriteRoom from "./components/FavoriteRoom";
import OurServices from "./components/OurServices";
import FooterComp from "./components/FooterComp";
import BottomControll from "./components/BottomControll";

export default function Home() {
  return (
    <main className="relative">
      
      <HeroSection />
      <WintanIntro />
      
      {/* favorite romm sections */}
      <FavoriteRoom />
      <OurServices />
      {/* footer */}
      <BottomControll/>
     <FooterComp/>
    </main>
  );
}
