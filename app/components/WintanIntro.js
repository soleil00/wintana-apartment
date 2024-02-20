import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const WintanIntro = () => {
  return (
    <Box className='flex justify-between px-5 -z-100 py-2 max-w-[1224px] items-center w-full mx-auto' sx={{flexDirection:{xs:"column",sm:"column",md:"row"},gap:{xs:0,sm:0,md:"20px"}}}>
          <Stack className="" sx={{width:{sm:"100%",sm:"100%",md:"40%"},margin:"auto"}}>
        <h3 className='text-center font-bold text-[30px] py-5'>Wintana Apartment</h3>
       
        <p className="my-3"> Wintana Apartment is a ground plus five floors building and elevator spanning from ground to top floor
          ,where ground floor is designated for commercial use.
          From the first to the third floor, there are a total of nine
          fully furnished apartments, with each floor containing three
          apartments. The first apartment on each floor consists of a
          full kitchen, full bathroom, dinning area, sofa, and a single
          bed room. The second apartment offers two bed rooms, full kitchen,
          two full bathrooms, sofa, and dinning area. The third apartment
          provides three bed rooms,full kitchen, three full bathrooms,sofa, and dining
          area. The fourth floor hosts a luxurious penthouse featuring
          five rooms. On the fifth floor, residents can enjoy upscale
          amenities including a swimming pool, bar, sauna, gym, and
          restaurant.

        </p>
        
      </Stack>
          <Stack width={{xs:"100%",sm:"100%",md:"50%"}}>
              
        <Image src="/apartment/view1.png" className='w-[100%] h-auto' alt='some' width={600} height={400}/>
      </Stack>
    
    </Box>
  );
};

export default WintanIntro;
