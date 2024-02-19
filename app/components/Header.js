
"use client"

import { Apartment, KeyboardArrowDown, MenuOutlined, UsbRounded } from '@mui/icons-material';
import { AppBar, IconButton, Stack, Toolbar, Typography ,Box,Drawer, ListItem, List, Accordion, AccordionSummary, AccordionDetails} from '@mui/material';
import Link from 'next/link';
import React, { useState } from 'react';

function Header({visible}) {
  const [isOpen,setIsOpen] = useState(false)

  const scrollUser=()=>{
    const target=document.getElementById("contact")
    if (target) {
      target.scrollIntoView({behavior:"smooth"})
    }
  }
  const scrollUser2=()=>{
    const target=document.getElementById("service")
    if (target) {
      target.scrollIntoView({behavior:"smooth"})
    }
  }

  return (
    <AppBar sx={{backgroundColor:"#D9D9D9"}}>
      <Toolbar className="justify-between sm:p-0" sx={{ padding: 0 }}>
        <IconButton className='flex flex-row justify-center items-center' onClick={ ()=>setIsOpen(true)}>
          <Apartment color='secondary' sx={{ display: { xs: "none", sm: "none", md: "block" } }} fontSize={"large"} />
          <MenuOutlined color='secondary' sx={{ display: { xs: "block", sm: "block", md: "none" } }}  />
          <Link href="/">
                      <Typography className="bg-yellow-400 font-bold text-white px-2 py-1 rounded-sm" fontSize={{xs:"16px",sm:"20px",md:"25px"}}>Wintana Apartment</Typography>

          </Link>
        </IconButton>
        <Stack direction={"row"} spacing={{ xs: 2, sm: 3, md: 7 }} padding={"10px"} display={{xs:"none",sm:"none",md:"block"}} alignItems={"center"}>
          <Link href="/" className="text-black">Home</Link>
          <Link href="/floors/floor-1" className="text-black">Rooms</Link>
         {visible && <p onClick={scrollUser2} className="text-black inline-block">Services</p>}
          <p onClick={scrollUser}  className="text-black inline-block">Contact Us</p>
          <Link href="/" className='bg-yellow-400 rounded-md px-4 py-2 font-bold text-white'>Book Online</Link>
        </Stack>

        
              
      </Toolbar>
      {/*  */}
      
          <Drawer open={isOpen} onClose={()=>setIsOpen(false)} anchor='left' sx={{width:"100%"}}>
        <Box width={"260px"}>
          
          <Typography className='text-center py-2 font-bold text-[30px]'>Wintana Apartment</Typography>

          <List>
            <Link href="/" onClick={()=>setIsOpen(false)}>
              <ListItem>
                Back Home
              </ListItem>
            </Link>
            <Link href="/floors/commercial/commercial-buildings" onClick={()=>setIsOpen(false)}>
              <ListItem className='font-bold text-[20px]'>
                Commercial Retailer Area
              </ListItem>
            </Link>
            
           
              <ListItem>
              <Accordion className="w-full">
                <AccordionSummary expandIcon={<KeyboardArrowDown/>} className='font-bold text-[20px]'>First floor Apartments</AccordionSummary>
                <AccordionDetails>
                  <Link href="/book/room-1" onClick={()=>setIsOpen(false)}> <Apartment fontSize='small' color='secondary'/> Apartment with single Room
                  </Link>
                  
                  
                </AccordionDetails>
                <AccordionDetails>
                  <Link href="/book/room-2" onClick={()=>setIsOpen(false)}> <Apartment fontSize='small' color='secondary'/> Apartment with 2 Rooms
                  </Link>
                </AccordionDetails>
                <AccordionDetails>
                  <Link href="/book/room-3" onClick={()=>setIsOpen(false)}> <Apartment fontSize='small' color='secondary'/> Apartment with 3 Rooms
                  </Link>
                </AccordionDetails>
                </Accordion>
            </ListItem>
            
              <ListItem>
              <Accordion className="w-full">
                <AccordionSummary expandIcon={<KeyboardArrowDown/>} className='font-bold text-[20px]'>Second floor Apartments</AccordionSummary>
                <AccordionDetails>
                  <Link href="/book/room-1" onClick={()=>setIsOpen(false)}> <Apartment fontSize='small' color='secondary'/> Apartment with single Room
                  </Link>
                  
                  
                </AccordionDetails>
                <AccordionDetails>
                  <Link href="/book/room-2" onClick={()=>setIsOpen(false)}> <Apartment fontSize='small' color='secondary'/> Apartment with 2 Rooms
                  </Link>
                </AccordionDetails>
                <AccordionDetails>
                  <Link href="/book/room-3" onClick={()=>setIsOpen(false)}> <Apartment fontSize='small' color='secondary'/> Apartment with 3 Rooms
                  </Link>
                </AccordionDetails>
                </Accordion>
            </ListItem>
            
              <ListItem>
              <Accordion className="w-full">
                <AccordionSummary expandIcon={<KeyboardArrowDown/>} className='font-bold text-[20px]'>Third floor Apartments</AccordionSummary>
                <AccordionDetails>
                  <Link href="/book/room-1" onClick={()=>setIsOpen(false)}> <Apartment fontSize='small' color='secondary'/> Apartment with single Room
                  </Link>
                  
                  
                </AccordionDetails>
                <AccordionDetails>
                  <Link href="/book/room-2" onClick={()=>setIsOpen(false)}> <Apartment fontSize='small' color='secondary'/> Apartment with 2 Rooms
                  </Link>
                </AccordionDetails>
                <AccordionDetails>
                  <Link href="/book/room-3" onClick={()=>setIsOpen(false)}> <Apartment fontSize='small' color='secondary'/> Apartment with 3 Rooms
                  </Link>
                </AccordionDetails>
                </Accordion>
              </ListItem>
 
            </List>

            </Box>
          </Drawer>
    
    </AppBar>
  );
}

export default Header;
