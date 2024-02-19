"use client";

import {
  Call,
  Email,
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
  baseURL: "https://wintana-api.vercel.app/",
});

function ContactComp({ visible }) {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
    <div className="bg-gray-400 w-[100%] testing-mg mt-[30px] cursor-pointer" id="contact">
      <Container className="max-w-[1224px] w-full mx-auto py-4 ">
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
          )}
        </Stack>
      </Container>
    </div>
  );
}

export default ContactComp;
