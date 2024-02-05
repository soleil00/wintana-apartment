"use client"

import { Paper, TextField ,Stack} from '@mui/material'
import React from 'react'


const Swipper1 = () => {

  return (
      <Stack 
            sx={{backgroundImage:'url("/swiper1.webp")',backgroundSize: 'cover', backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat', height: '300px'
            }}
          justifyContent={"center"} alignItems={"center"} position={"relative"} zIndex={1000} marginTop={"60px"}
      >
          
        <h3 className='text-[25px] sm:text-[40px] md:text-[50px] md:text-red-400 font-bold text-yellow-700'>
              SWipper 1 comp and soleil using mui
      </h3>
    

    </Stack>
  )
}

export default Swipper1