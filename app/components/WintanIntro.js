import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const WintanIntro = () => {
  return (
    <Box className='flex justify-between px-5 -z-100 py-2 max-w-[1224px] items-center w-full mx-auto' sx={{flexDirection:{xs:"column",sm:"column",md:"row"},gap:{xs:0,sm:0,md:"20px"}}}>
          <Stack className="" sx={{width:{sm:"100%",sm:"100%",md:"40%"},margin:"auto"}}>
        <h3 className='text-center font-bold text-[30px] py-5'>Wintana Apartment</h3>
        <p>Wintana Apartment offers a versatile space for both business and residential purposes,
          prioritizing commercial activities alongside accommodation services. Spanning
          three floors, the ground floor is dedicated to commercial ventures, providing a
          bustling hub for retailers to thrive amidst the urban landscape
          </p>
        <p className="my-3">On the upper levels, three apartments adorn each floor,
          offering comfortable living spaces tailored to modern lifestyles.
          The fourth floor houses an elegant penthouse, showcasing luxurious
          living quarters with breathtaking panoramic views

        </p>
        <p>
          Additionally, the top floor serves as a recreational oasis, featuring
          amenities such as a swimming pool, bar, and kitchen, fostering a lively
          social atmosphere for residents. With its meticulous design and comprehensive
          offerings, Winatan Apartment reshapes contemporary living and entrepreneurship.
        </p>
      </Stack>
          <Stack width={{xs:"100%",sm:"100%",md:"50%"}}>
              
        <Image src="/apartment/view1.png" className='w-[100%] h-auto' alt='some' width={600} height={400}/>
      </Stack>
    
    </Box>
  );
};

export default WintanIntro;
