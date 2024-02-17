"use client";

import AccomodationRoomCard from "@/app/components/AccomodationRoomCard";
import BottomControll from "@/app/components/BottomControll";
import ContactComp from "@/app/components/ContactComp";
import FooterComp from "@/app/components/FooterComp";
import { Email, Facebook, Instagram, LocationOn, Twitter, WhatsApp } from "@mui/icons-material";
import { Button, Container, Grid, Stack, TextField, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React,{useState} from "react";

const page = ({ params }) => {
    const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { title } = params;
  const regex = /[%]\d+/gi;
  const reg2 = /\-/gi;
  const goodTitle = title.replace(regex, " ");
  const last = +title[title.length - 1];
  const id = last

    const handleSendMessage = async () => {
    if (email && message) {
      try {
        const response = await axiosClient.post("/api/message", {
          email,
          message,
        });

        setEmail("");
        setMessage("");

        console.log("response:", response);

        if (response.status === 200) {
          console.log("Email sent successfully");
          // You may want to handle success in your UI
        } else {
          console.error("Error:", response.statusText);
          // Handle the error as needed
        }
      } catch (error) {
        console.error("Error:", error);
        // Handle the error as needed
      }
    }
  };

  return (
    <div className="relative min-h-screen">
      <Container
        sx={{ marginTop: { xs: "67px", sm: "69px", md: "72px" } }}
        className="relative"
      >
        <Stack
          width={"100%"}
          direction={{ xs: "column", sm: "column", md: "row" }}
          gap={2}
        >
          <Stack width={{ xs: "100%", sm: "100%", md: "50%" }}>
            <Image
              alt="image here"
              src={last === 1?"/apartment/view2.png":last ===2 ? "/apartment/view3.png" : "/apartment/view4.png"}
              width={200}
              height={300}
              className="w-[100%]"
            />
          </Stack>
          <Stack width={{ xs: "100%", sm: "100%", md: "50%" }} padding={2}>
            <Typography
              textAlign={"center"}
              className="pb-3 text-[20px] font-bold"
            >
              Here is all You can find in {id===1?"First":id===2?"Second":"Third"} Floor
            </Typography>
            <Typography py={"10px"} className="text-slate-400">
              Explore the residential charm of{" "}
              {last === 1
                ? "First"
                : last > 1 && last < 3
                ? "Second"
                : last > 2 && last < 4
                ? "Third"
                : "Fourth"}{" "}
              floor apartments at Wintana Apartments, featuring a trio of meticulously
              designed rooms. . .
            </Typography>
            <Link href={`/book/room-1`}>
              <Typography py={"10px"} className="text-slate-400">
                {" "}
                <span className="font-bold text-gray-600">
                  The first Apartment offers
                </span>{" "}
                a cozy blend of{" "}
                <span className="underline">
                  1 bedroom, 1 salon, 1 bathroom, 1 kitchen, and 1 toilet—a
                </span>{" "}
                perfect haven for a single occupant
              </Typography>
            </Link>
            <Link href={`/book/room-2`}>
              <Typography py={"10px"} className="text-slate-400">
                {" "}
                <span className="font-bold text-gray-600">
                  Move on to the second Apartment with
                </span>{" "}
                <span className="underline">
                  2 rooms corresponding to 1 bedroom,1
                  bathroom and 1 toilet for each
                  room and 1 shared kitchen and salon for all rooms
                </span>
              </Typography>
            </Link>
            <Link href={`/book/room-3`}>
              <Typography py={"10px"} className="text-slate-400">
                {" "}
                <span className="font-bold text-gray-600">The third Apartment</span>,
                a spacious retreat,
                <span className="underline">
                  {" "}
                  boasts 3 rooms, shared a welcoming salon and fully-equipped kitchen for all those rooms,
                  and private 1 bathroom,1 toilet and 1 bed for each room.
                </span>{" "}

                Each room is crafted to provide residents with a unique and
                comfortable living experience.
              </Typography>
            </Link>
          </Stack>
        </Stack>
        <h3 className="py-3">
          Favorite Rooms from {goodTitle.replace(reg2, " ")}
        </h3>
        <Grid container spacing={2}>
          <AccomodationRoomCard
            path={"/room1/1roomkitchen.jpg"}
            room={4}
            display={{ xs: 12, sm: 6, md: 4 }}
            title={"Apartment with 1 room"}
            link={"/book/room-1"}
            beds={"1 bed"}
            toilet={"1 toilet"}
            kitchen={"1 kitchen"}
            type={"residential"}
          />
          <AccomodationRoomCard
            path={"/room2/2roomsalon2.jpg"}
            room={4}
            display={{ xs: 12, sm: 6, md: 4 }}
            title={"Apartment with 2 room"}
            link={"/book/room-2"}
            beds={"2 beds"}
            toilet={"2 toiltes"}
            kitchen={"1 kitchen"}
            type={"residential"}
          />
          <AccomodationRoomCard
            path={"/room3/3roomsalon1.jpg"}
            room={4}
            display={{ xs: 12, sm: 6, md: 4 }}
            title={"Apartment with 3 room"}
            link={"/book/room-3"}
            beds={"3 beds"}
            toilet={"3 toilets"}
            kitchen={"1 kitchens"}
            type={"residential"}
          />
         
        </Grid>
      </Container>
      
     
       <div className="bg-gray-400 w-[100%] testing-mg " id="contact">
      <Container className="max-w-[1224px] w-full mx-auto py-2 ">
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          justifyContent={{ xs: "none", sm: "none", md: "space-between" }}
          alignItems={"center"}
          width={"100%"}
        >
          
            <Stack
              className=" border-gray-400 border rounded-md p-4"
              width={{ xs: "100%", sm: "100%", md: "30%" }}
            >
              <Typography
                variant="h4"
                component="div"
                sx={{ paddingBottom: { xs: "10px", sm: "15px", md: "30px" } }}
              >
                Wintana Apartment
              </Typography>
              <Typography component="body2" className="mb-[15px] text-[15px]">
                Wintana Apartments blends commercial vibrancy with residential
                elegance, offering prime retail spaces on the ground floor and
                modern accommodations above.
              </Typography>
              <Typography component="body2" className="text-[15px]">
                The fourth floor boasts exclusive pentRooms, while the top floor
                features a comprehensive fitness and leisure center, including a
                sauna, pool, fully equipped kitchen, and a stylish bar.
              </Typography>
            </Stack>
      

          {/* <div id="contact" className="w-full sm:w-full md:w-1/3"> */}
          <Stack
            className=" border-gray-400 border rounded-md p-4"
            width={{ xs: "100%", sm: "100%", md: "30%" }}
            id="contact"
          >
            <Typography
              variant="h4"
              component="div"
              sx={{ paddingBottom: { xs: "10px", sm: "15px", md: "30px" } }}
            >
              Contact Us
            </Typography>
            <Stack justifyContent={"space-between"}>
              <Stack direction={"row"} spacing={2} alignContent={"center"}>
                <LocationOn color="secondary" fontSize="large" />
                <Typography>Kg 452 st</Typography>
              </Stack>
              <Stack direction={"row"} spacing={2} alignContent={"center"}>
                <Instagram color="secondary" fontSize="large" />
                <Typography>@wintan-apartment</Typography>
              </Stack>
              <Stack direction={"row"} spacing={2} alignContent={"center"}>
                <Facebook color="secondary" fontSize="large" />
                <Typography>wintana</Typography>
              </Stack>
              <Stack direction={"row"} spacing={2} alignContent={"center"}>
                <WhatsApp color="secondary" fontSize="large" />
               <a href="tel:0785612510">
  <Typography>0785612510</Typography>
</a>
              </Stack>
              <Stack direction={"row"} spacing={2} alignContent={"center"}>
                <Twitter color="secondary" fontSize="large" />
                <Typography>@Wintana23</Typography>
              </Stack>
              <Stack direction={"row"} spacing={2} alignContent={"center"}>
                <Email color="secondary" fontSize="large" />
                <Typography>sbhatuare@yahoo.com</Typography>
              </Stack>
            </Stack>
          </Stack>
          {/* </div> */}
          
            <Stack
              className=" border-gray-400 border rounded-md p-4"
              width={{ xs: "100%", sm: "100%", md: "30%" }}
              // height={"370px"}
              spacing={2}
            >
              <TextField
                fullWidth
                label="Enter Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Edit here to add Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <Button
                color="secondary"
                variant="outlined"
                onClick={handleSendMessage}
              >
                Send Message
              </Button>
            </Stack>
          
        </Stack>
      </Container>
    </div>
    </div>
  );
};

export default page;
