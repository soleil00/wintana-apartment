import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import WintanIntro from "./components/WintanIntro";
import FavoriteRoom from "./components/FavoriteRoom";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroSection />
      <WintanIntro />
      
      {/* favorite romm sections */}
      <h2 className="text-5 font-bold py-5 px-10">Our favorite Rooms</h2>
      <FavoriteRoom/>
    </main>
  );
}
