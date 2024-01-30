import { Apartment, MenuOutlined, UsbRounded } from '@mui/icons-material';
import { AppBar, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <AppBar>
      <Toolbar className="justify-between sm:p-0" sx={{ padding: 0 }}>
        <IconButton className='flex flex-row justify-center items-center'>
          <Apartment color='secondary' sx={{ display: { xs: "none", sm: "none", md: "block" } }} />
          <MenuOutlined color='secondary' sx={{ display: { xs: "block", sm: "block", md: "none" } }} />
          <Typography>Wintana Apartment</Typography>
        </IconButton>
        <Stack direction={"row"} spacing={{ xs: 2, sm: 3, md: 7 }} padding={"10px"} display={{xs:"none",sm:"none",md:"block"}}>
          <Link href="/">Home</Link>
          <Link href="/">Rooms</Link>
          <Link href="/">Services</Link>
          <Link href="/">Contact Us</Link>
          <Link href="/" className='bg-yellow-400 rounded-md px-4 py-2 font-bold text-black'>Book Online</Link>
              </Stack>
              
      </Toolbar>
    </AppBar>
  );
}

export default Header;
