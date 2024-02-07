"use client"

import { Paper, TextField } from '@mui/material'
import React from 'react'


const HeroSection = () => {

  return (
      <div className='mt-[60px] z-1000 relative flex flex-col justify-center items-center'
          style={{
              backgroundImage: 'url("/apartment/view1.png")',
              backgroundSize: 'cover', backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat', height: '200px'
          }}>
          
      {/* <h3 className='text-[25px] sm:text-[40px] md:text-[50px] md:text-red-400 font-bold text-yellow-700'> */}
      
       

          <Paper  spacing={2} className="p-4 absolute -bottom-6 flex flex-row justify-between items-center" sx={{width:{xs:"90%",sm:"80%",md:"60%"},zIndex:1000}}>
              <TextField placeholder='Search for Accomodation,commercial or Leisure' fullWidth/>
              <button className="bg-yellow-400 text-center text-[18px] px-1 py-0 rounded-md">Check Availability</button>
          </Paper>

    </div>
  )
}

export default HeroSection