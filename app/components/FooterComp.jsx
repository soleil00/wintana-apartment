import { Facebook, Google, Instagram, Twitter } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const FooterComp = () => {
  return (
    <Box
      className="bg-black text-white flex justify-center items-center"
      sx={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        height: { xs: "200px", sm: "auto", md: "auto" },
      }}
    >
      <Stack
        flexDirection={{ xs: "column", sm: "column", md: "row" }}
        gap={{ xs: 2, sm: 1, md: 5 }}
        paddingY={{ xs: 2, sm: 1, md: 0 }}
        alignItems={{ xs: "center", sm: "center", md: "center" }}
      >
        <Typography>Wintana Apartment</Typography>
        <Stack justifyContent={"center"} alignItems={"center"}>
          <p>some text</p>
          <p>some text</p>
          <p>some text</p>
          <p>some text</p>
          <p>some text</p>
        </Stack>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={2}
        >
          <Link href="/">
            <Facebook color="secondary" fontSize="medium" />
          </Link>
          <Link href="/">
            <Instagram color="secondary" fontSize="medium" />
          </Link>
          <Link href="/">
            <Twitter color="secondary" fontSize="medium" />
          </Link>
          <Link href="/">
            <Google color="secondary" fontSize="medium" />
          </Link>
        </Stack>
      </Stack>
    </Box>
  );
};

export default FooterComp;
