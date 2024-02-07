"use client"

import { Paper, TextField ,Stack} from '@mui/material'
import Link from 'next/link'
import React from 'react'


const Swipper1 = () => {

  return (
      <Stack 
            sx={{backgroundImage:'url("/room3/3roomsalon2.jpg")',backgroundSize: 'cover', backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat', height: '300px'
            }}
          justifyContent={"center"} alignItems={"center"} position={"relative"} zIndex={1000} marginTop={"60px"}
      >
          
        <h3 className='text-[25px] sm:text-[40px] md:text-[50px]  font-bold text-yellow-700'>
             Book or Buy Your favorite room today
      </h3>

      <Link className="bg-blue-700 px-4 py-2 rounded-md text-white" href="/floors/floor-1">Book or Buy</Link>
    

    </Stack>
  )
}

export default Swipper1