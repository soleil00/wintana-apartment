"use client"

import { Container, Grid, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AccomodationRoomCard from '../components/AccomodationRoomCard'
import ContactComp from '../components/ContactComp'
import BottomControll from '../components/BottomControll'

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
      <>
    <Container className="pt-[65px]">
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
          title={"Bar and Kitchen"}
          type={"commercial"}
                  link={"/comming-soon"}
                  available={"true"}
        /> 
        <AccomodationRoomCard
          path={"/sauna2.jpeg"}
          room={4}
          display={{ xs: 12, sm: 4, md: 3 }}
          title={"Sauna"}
          type={"commercial"}
                  link={"/comming-soon"}
                  available={"true"}
        /> 
                    </Grid>
                    <p className='flex items-center justify-center'>These service are expected to open very soon to wintan Apartment</p>
                </Stack>
               
            </Container>
            <Stack marginBottom={{xs:0,sm:"150px",md:"300px"}}></Stack>
            <ContactComp visible={true}/>
            </>
  )
}

export default Page