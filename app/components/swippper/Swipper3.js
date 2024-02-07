"use client"

import { Instagram, LocationOn,Facebook,WhatsApp,Twitter } from '@mui/icons-material'
import { Paper, TextField,Typography,Stack } from '@mui/material'
import React from 'react'


const Swipper3 = () => {

  return (
      <div className='mt-[45px] z-1000 relative flex flex-col justify-center items-center'
          style={{
              backgroundImage: 'url("/swiper3.jpeg")',
              backgroundSize: 'cover', backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat', height: '300px'
          }}>
          
      <Stack
            width={{ xs: "100%", sm: "100%", md: "30%" }}
        justifyContent={"center"}
        alignItems={"center"}
        className='bg-yellow-400 h-[100%]'
      >
        <Typography>Contact Us</Typography>
           
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
                <Typography>wintana</Typography>
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
    </div>
  )
}

export default Swipper3