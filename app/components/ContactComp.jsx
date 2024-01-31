import {
  Call,
  Facebook,
  Google,
  LocationOn,
  Phone,
  WhatsApp,
} from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import React from "react";

function ContactComp() {
  return (
    <Box>
      <h1 className="text-center text-[20px] py-7 font-bold">
        Book you Room with us today
      </h1>
      <Stack>
        <Stack direction={"row"} spacing={2}>
          <div className="flex gap-1 justify-center items-center">
            <LocationOn fontSize="medium" color="secondary" />
            <p>Address : </p>
          </div>
          <p>kg 452 st</p>
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          justifyContent={"center"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <Stack
            direction={"row"}
            spacing={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <WhatsApp fontSize="large" color="secondary" />
            <p> +250 782 443 651</p>
          </Stack>
          <Stack
            direction={"row"}
            spacing={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Google fontSize="large" color="secondary" />
            <p> srukundo01@gmail.co,</p>
          </Stack>
          <Stack
            direction={"row"}
            spacing={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Call fontSize="large" color="secondary" />
            <p> +250 782 443 651</p>
          </Stack>
          <Stack
            direction={"row"}
            spacing={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Facebook fontSize="large" color="secondary" />
            <p> Wintana facebook</p>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
}

export default ContactComp;
