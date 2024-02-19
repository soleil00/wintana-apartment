"use client"

import { Container, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AccomodationRoomCard from '../components/AccomodationRoomCard'
import ContactComp from '../components/ContactComp'


const Page = () => {
    const [width, setWidth] = useState(0)

    const getWindowWidth = () => {
            window.addEventListener("resize", () => {
                setWidth(window.innerWidth)
            })
        }
    
    useEffect(() => {
        getWindowWidth()
    },[width])
    
    return (
      <div className='relative min-h-screen'>
    <Container className="pt-[65px] min-h-screen">
        <Stack
          flexDirection={"column"}
          spacing={5}
          width={"100%"}
              alignItems={"center"}
              justifyContent={"center"}
          >
                 <Grid container spacing={2}>
        <AccomodationRoomCard
          path={"/pool.jpeg"}
          room={4}
          display={{ xs: 12, sm: 4, md: 3 }}
          title={"Swimming pool"}
          type={"commercial"}
                  link={"/comming-soon"}
                  available={"true"}
        /> 
        <AccomodationRoomCard
          path={"/bar.webp"}
          room={4}
          display={{ xs: 12, sm: 4, md: 3 }}
          title={"Bar and Restaurant"}
          type={"commercial"}
                  link={"/comming-soon"}
                  available={"true"}
        /> 
        <AccomodationRoomCard
          path={"/sauna2.jpeg"}
          room={4}
          display={{ xs: 12, sm: 4, md: 3 }}
          title={"Sauna and Massage"}
          type={"commercial"}
                  link={"/comming-soon"}
                  available={"true"}
        /> 
        <AccomodationRoomCard
          path={"/gym.jpg"}
          room={4}
          display={{ xs: 12, sm: 4, md: 3 }}
          title={"Gymastic"}
          type={"commercial"}
                  link={"/comming-soon"}
                  available={"true"}
        /> 
        <AccomodationRoomCard
          path={"/coffe.jpg"}
          room={4}
          display={{ xs: 12, sm: 4, md: 3 }}
          title={"Coffe shop"}
          type={"commercial"}
                  link={"/comming-soon"}
                  available={"true"}
        /> 
                    </Grid>
                    <p className='flex items-center justify-center'>These service are expected to open very soon to wintan Apartment</p>
                </Stack>
               
            </Container>
           
            <ContactComp visible={true}/>
            </div>
  )
}

export default Page