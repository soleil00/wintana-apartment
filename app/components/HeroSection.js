import { Paper, TextField } from '@mui/material'
import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const nums = [1, 2, 3, 4, 5, 58, 6, 7];

const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 1, // Set to 1 to display a single child at once
  slidesToScroll: 1,
  initialSlide: 0,
  adaptiveHeight: true
};

const HeroSection = () => {
  return (
    <div className='mt-[60px] relative flex flex-col justify-center items-center'
      style={{
        backgroundImage: 'url("./wintana.jpeg")',
        backgroundSize: 'cover', backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat', height: '300px'
      }}>

      <Slider {...settings}>
        {nums.map(num => (
          <h3 key={num} className='text-[25px] sm:text-[40px] md:text-[50px] md:text-red-400 font-bold text-yellow-700'>
            num {num}
          </h3>
        ))}
      </Slider>

      <Paper className="p-4 absolute -bottom-6 flex flex-row justify-between items-center" sx={{ width: { xs: "90%", sm: "80%", md: "60%" } }}>
        <TextField placeholder='Search room for family' />
        <TextField placeholder='Search room for family' />
        <TextField placeholder='Search room for family' />
      </Paper>

    </div>
  )
}

export default HeroSection;
