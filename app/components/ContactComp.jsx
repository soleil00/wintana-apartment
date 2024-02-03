"use client";

import {
  Call,
  Facebook,
  Google,
  Instagram,
  LocationOn,
  Phone,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import {
  Box,
  Stack,
  Typography,
  Container,
  TextField,
  Button,
} from "@mui/material";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

function ContactComp({ visible }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async () => {
    if (email && message) {
      try {
        const response = await axiosClient.post("/newsletter");
        console.log(response.data);
      } catch (error) {
        console.error("Error", error);
      }
    }
  };
  return (
    <div className="bg-gray-400 w-[100%] mt-auto">
      <Container className="max-w-[1224px] w-full mx-auto py-4 mt-auto">
        <Stack
          direction={{ xs: "column", sm: "column", md: "row" }}
          justifyContent={{ xs: "none", sm: "none", md: "space-between" }}
          alignItems={"center"}
          width={"100%"}
        >
          {visible && (
            <Stack
              className=" border-gray-400 border rounded-md p-4"
              width={{ xs: "100%", sm: "100%", md: "30%" }}
              // height={"370px"}
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
          )}

          <Stack
            className=" border-gray-400 border rounded-md p-4"
            width={{ xs: "100%", sm: "100%", md: "30%" }}
            // height={"370px"}
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
                <Typography>@winatan-apartment</Typography>
              </Stack>
              <Stack direction={"row"} spacing={2} alignContent={"center"}>
                <Facebook color="secondary" fontSize="large" />
                <Typography>wijntana</Typography>
              </Stack>
              <Stack direction={"row"} spacing={2} alignContent={"center"}>
                <WhatsApp color="secondary" fontSize="large" />
                <Typography>0785612510</Typography>
              </Stack>
              <Stack direction={"row"} spacing={2} alignContent={"center"}>
                <Twitter color="secondary" fontSize="large" />
                <Typography>@Wintana23</Typography>
              </Stack>
            </Stack>
          </Stack>
          {visible && (
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
                label="Enter Your Message"
                multiline
                rows={4}
                defaultValue="Edit here to add Your message"
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
          )}
        </Stack>
      </Container>
    </div>
  );
}

export default ContactComp;
