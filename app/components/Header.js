
"use client"

import { Apartment, MenuOutlined, UsbRounded } from '@mui/icons-material';
import { AppBar, IconButton, Stack, Toolbar, Typography ,Box,Drawer} from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';

function Header() {
  const [isOpen,setIsOpen] = useState(false)
  return (
    <AppBar sx={{backgroundColor:"#D9D9D9"}}>
      <Toolbar className="justify-between sm:p-0" sx={{ padding: 0 }}>
        <IconButton className='flex flex-row justify-center items-center'>
          <Apartment color='secondary' sx={{ display: { xs: "none", sm: "none", md: "block" } }} fontSize={"large"} />
          <MenuOutlined color='secondary' sx={{ display: { xs: "block", sm: "block", md: "none" } }} onClick={ ()=>setIsOpen(true)} />
          <Link href="/">
                      <Typography className="text-yellow-500 font-bold" fontSize={{xs:"18px",sm:"22px",md:"30px"}}>Wintana Apartment</Typography>

          </Link>
        </IconButton>
        <Stack direction={"row"} spacing={{ xs: 2, sm: 3, md: 7 }} padding={"10px"} display={{xs:"none",sm:"none",md:"block"}}>
          <Link href="/" className="text-black">Home</Link>
          <Link href="/floors/Residential-Building" className="text-black">Rooms</Link>
          <Link href="/" className="text-black">Services</Link>
          <Link href="/" className="text-black">Contact Us</Link>
          <Link href="/" className='bg-yellow-400 rounded-md px-4 py-2 font-bold text-black'>Book Online</Link>
        </Stack>

        
              
      </Toolbar>
      {/*  */}
      
          <Drawer open={isOpen} onClose={()=>setIsOpen(false)} anchor='left' sx={{width:"100%"}}>
            <Box width={"230px"}>
              thi is test
              </Box>
          </Drawer>
    
    </AppBar>
  );
}

export default Header;
