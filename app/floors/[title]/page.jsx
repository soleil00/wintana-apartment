"use client";

import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = ({ params }) => {
  const { title } = params;
  const regex = /[%]\d+/gi;
  const goodTitle = title.replace(regex, " ");
  const last = +title[title.length - 1];
  return (
    <Container className="mt-[65px]">
      <Stack
        width={"100%"}
        direction={{ xs: "column", sm: "column", md: "row" }}
        gap={2}
      >
        <Stack width={{ xs: "100%", sm: "100%", md: "50%" }}>
          <Image
            alt="image here"
            src="/wintana.jpeg"
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
            {goodTitle} {last}
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
                2 bedrooms, maintaining the comfort of a 1 salon, 1 bathroom, 1
                kitchen, and an additional toilet
              </span>
            </Typography>
          </Link>
          <Link href={`/book/room-3`}>
            <Typography py={"10px"} className="text-slate-400">
              {" "}
              <span className="font-bold text-gray-600">The third room</span>, a
              spacious retreat,
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
    </Container>
  );
};

export default page;
