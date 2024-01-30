import { Paper, TextField } from '@mui/material'
import React from 'react'

const HeroSection = () => {
  return (
      <div className='mt-[60px] relative flex flex-col justify-center items-center'
          style={{
              backgroundImage: 'url("./wintana.jpeg")',
              backgroundSize: 'cover', backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat', height: '300px'
          }}>
          
          <h3 className='text-[25px] sm:text-[40px] md:text-[50px] md:text-red-400 font-bold text-yellow-700'>Book Your Room From Now</h3>
        

          <Paper className="p-4 absolute -bottom-6 flex flex-row justify-between items-center" sx={{width:{xs:"90%",sm:"80%",md:"60%"}}}>
              <TextField placeholder='Serach room for family'/>
              <TextField placeholder='Serach room for family'/>
              <TextField placeholder='Serach room for family'/>
          </Paper>

    </div>
  )
}

export default HeroSection