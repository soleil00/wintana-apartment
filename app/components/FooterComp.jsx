import {
  Facebook,
  Google,
  Instagram,
  Twitter,
  LocationOn,
  WhatsApp,
} from "@mui/icons-material";
import { Box, Stack, Typography, Button, TextField } from "@mui/material";
import Link from "next/link";
import React from "react";

const FooterComp = () => {
  return (
    <Box
      className="bg-black text-white flex justify-between items-center"
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: { xs: "200px", sm: "auto", md: "auto" },
      }}
    >
      <Stack
      // className=" border-gray-400 border rounded-md p-4"
      width={{ xs: "100%", sm: "100%", md: "30%" }}
      // height={"370px"}
      >
        <Typography variant="h4" component="div" className="pb-[10px]">
          Wintana Apartment
        </Typography>
        <p className="mb-[15px] text-[15px]">
          Wintana Apartments blends commercial vibrancy with residential
          elegance, offering prime retail spaces on the ground floor and modern
          accommodations above.
        </p>
        <p className="text-[15px]">
          The fourth floor boasts exclusive pentRooms, while the top floor
          features a comprehensive fitness and leisure center, including a
          sauna, pool, fully equipped kitchen, and a stylish bar.
        </p>
      </Stack>
      <Stack
        // className=" border-gray-400 border rounded-md p-4"
        // width={{ xs: "100%", sm: "100%", md: "30%" }}
        // height={"370px"}
        spacing={2}
      >
        <Typography variant="h4" component="div" className="pb-[10px]">
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
            <Typography>0782443651</Typography>
          </Stack>
          <Stack direction={"row"} spacing={2} alignContent={"center"}>
            <Twitter color="secondary" fontSize="large" />
            <Typography>@Wintana23</Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        // className=" border-gray-400 border rounded-md p-4"
        // width={{ xs: "100%", sm: "100%", md: "30%" }}
        // height={"370px"}
        spacing={2}
      >
        <TextField fullWidth label="Enter Your Email" />
        <TextField
          fullWidth
          label="Enter Your Message"
          multiline
          rows={6}
          // defaultValue="Edit here to add Your message"
        />
        <Button color="secondary" variant="outlined">
          Send Message
        </Button>
      </Stack>
      {/* </Stack> */}
    </Box>
  );
};

export default FooterComp;
