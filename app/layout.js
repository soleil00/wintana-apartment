import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import BottomControll from "./components/BottomControll";
import FooterComp from "./components/FooterComp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Wintana Apartment",
  description: "This is wintana apartment ,best and affordable acccomodation in kigali",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.svg" />
      </head>
      <body className={`${inter.className} relative h-[100%] bg-[#F5F5F5]`}>
        <Header/>
        {children}
         {/* <BottomControll/>? */}
         {/* <FooterComp/> */}
      </body>
    </html>
  );
}
