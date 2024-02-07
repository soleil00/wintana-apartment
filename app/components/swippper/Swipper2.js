"use client"

import { Paper, TextField } from '@mui/material'
import Link from 'next/link'
import React from 'react'


const Swipper2 = () => {

  return (
      <div className='mt-[60px] z-1000 relative flex flex-col justify-center items-center'
          style={{
              backgroundImage: 'url("/room1/1roomsalon.jpg")',
              backgroundSize: 'cover', backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat', height: '300px'
          }}>
          
          {/* <p className='text-black text-[24px]'>Best Individual Room Can be found only at winatana Apartment</p> */}
          <Link href="/book/room-1" className="bg-yellow-500 text-white px-4 py-2 rounded-md">View This Room Now</Link>
      
       

    </div>
  )
}

export default Swipper2