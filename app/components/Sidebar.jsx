"use client";

import { Box, Drawer } from "@mui/material";
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Box width={"230px"}>
      <Drawer open={isOpen} onClose={() => setIsOpen}></Drawer>
    </Box>
  );
};

export default Sidebar;
