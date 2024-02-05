"use client"

import { Paper, TextField } from '@mui/material'
import React from 'react'


const Swipper3 = () => {

  return (
      <div className='mt-[60px] z-1000 relative flex flex-col justify-center items-center'
          style={{
              backgroundImage: 'url("/swiper3.jpeg")',
              backgroundSize: 'cover', backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat', height: '300px'
          }}>
          
      <h3 className='text-[25px] rounded-md bg-blue-400 sm:text-[40px] md:text-[50px] md:text-red-400 font-bold text-yellow-700'>
        Book Your Room Today
      </h3>
      
       

          

    </div>
  )
}

export default Swipper3