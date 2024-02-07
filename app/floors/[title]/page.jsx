"use client";

import AccomodationRoomCard from "@/app/components/AccomodationRoomCard";
import BottomControll from "@/app/components/BottomControll";
import ContactComp from "@/app/components/ContactComp";
import FooterComp from "@/app/components/FooterComp";
import { Container, Grid, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = ({ params }) => {
  const { title } = params;
  const regex = /[%]\d+/gi;
  const reg2 = /\-/gi;
  const goodTitle = title.replace(regex, " ");
  const last = +title[title.length - 1];
  return (
    <>
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
              src={`${
                last === 1
                  ? "/apartment/view1.png"
                  : last === 2
                  ? "/apartment/view2.ong"
                  : "/apartment/view3.png"
              }`}
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
              {goodTitle.replace(reg2, " ")}
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
              floor at Wintana Apartments, featuring a trio of meticulously
              designed rooms. . .
            </Typography>
            <Link href={`/book/room-1`}>
              <Typography py={"10px"} className="text-slate-400">
                {" "}
                <span className="font-bold text-gray-600">
                  The first room offers
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
                  Move on to the second room with
                </span>{" "}
                <span className="underline">
                  2 bedrooms, maintaining the comfort of a 1 salon, 1 bathroom,
                  1 kitchen, and an additional toilet
                </span>
              </Typography>
            </Link>
            <Link href={`/book/room-3`}>
              <Typography py={"10px"} className="text-slate-400">
                {" "}
                <span className="font-bold text-gray-600">The third room</span>,
                a spacious retreat,
                <span className="underline">
                  {" "}
                  boasts 3 bedrooms, a welcoming salon, fully-equipped kitchen,
                  private bathroom, and an extra toilet
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
            path={"/room1/1roomsalon.jpg"}
            room={4}
            display={{ xs: 12, sm: 6, md: 3 }}
            title={"1 in 1 room"}
            link={"/book/room-1"}
            beds={"1 bed"}
            toilet={"1 toilet"}
            kitchen={"1 kitchen"}
            type={"residential"}
          />
          <AccomodationRoomCard
            path={"/room2/2roomkitchen2.jpg"}
            room={4}
            display={{ xs: 12, sm: 6, md: 3 }}
            title={"2 in 1 room"}
            link={"/book/room-2"}
            beds={"2 beds"}
            toilet={"2 toiltes"}
            kitchen={"1 kitchen"}
            type={"residential"}
          />
          <AccomodationRoomCard
            path={"/room3/3roomsalon2.jpg"}
            room={4}
            display={{ xs: 12, sm: 6, md: 3 }}
            title={"3 in 1 room"}
            link={"/book/room-3"}
            beds={"3 beds"}
            toilet={"3 toilets"}
            kitchen={"1 kitchens"}
            type={"residential"}
          />
          {/* <AccomodationRoomCard
          path={"/room3.jpeg"}
          room={4}
          display={{ xs: 6, sm: 3, md: 2 }}
          title={"Room 2"}
          type={"commercial"}
          beds={2}
          link={"/"}
          toilet={1}
          kitchen={1}
          // rooms={2}
          type={"residential"}
        />
        <AccomodationRoomCard
          path={"/living.webp"}
          room={4}
          display={{ xs: 6, sm: 3, md: 2 }}
          title={"Room 3"}
          type={"commercial"}
          beds={3}
          link={"/"}
          toilet={1}
          kitchen={1}
          // rooms={3}
          type={"residential"}
        /> */}
        </Grid>
      </Container>
      <BottomControll />
      <ContactComp visible={true} />
    </>
  );
};

export default page;
