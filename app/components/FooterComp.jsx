import { Facebook, Google, Instagram, Twitter } from '@mui/icons-material'
import { Paper, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const FooterComp = () => {
  return (
      <Paper className='bg-black text-white flex justify-center items-center absolute bottom-0 left-0 right-0 ' sx={{height:{xs:"200px",sm:"auto",md:"auto"}}}>
          <Stack flexDirection={{xs:"column",sm:"column",md:"row"}} gap={{xs:2,sm:5,md:5}} paddingY={5} alignItems={"center"}>
              <Typography>Wintana Apartment</Typography>
              <Stack justifyContent={"center"} alignItems={"center"}>
                  <p>some text</p>
                  <p>some text</p>
                  <p>some text</p>
                  <p>some text</p>
                  <p>some text</p>
              </Stack>
              <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={2}>
                  <Link href="/">
                        <Facebook color='secondary' fontSize='medium' />       
                  </Link>
                  <Link href="/">
                        <Instagram color='secondary' fontSize='medium' />       
                  </Link>
                  <Link href="/">
                        <Twitter color='secondary' fontSize='medium' />       
                  </Link>
                  <Link href="/">
                        <Google color='secondary' fontSize='medium' />       
                  </Link>

              </Stack>
          </Stack>
    </Paper>
  )
}

export default FooterComp