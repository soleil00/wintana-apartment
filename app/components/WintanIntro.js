import { Box, Stack } from '@mui/material';
import Image from 'next/image';
import React from 'react';

const WintanIntro = () => {
  return (
    <Box className='flex justify-between px-5 py-2 max-w-[1224px] w-full mx-auto' sx={{flexDirection:{xs:"column",sm:"column",md:"row"},gap:{xs:0,sm:0,md:"20px"}}}>
          <Stack className="" sx={{width:{sm:"100%",sm:"100%",md:"40%"},margin:"auto"}}>
        <h3 className='text-center font-bold text-[30px] py-5'>Wintana Apartment</h3>
        <p>Welcome to Wintana Apartments—a dynamic city building seamlessly blending
          commercial and residential spaces. The ground floor offers prime retail locations,
          ensuring visibility and accessibility. As you ascend, modern accommodations on the
          first three floors strike a balance between privacy and community living.
          </p>
          <p className="my-3">Experience luxury on the fourth floor with exclusive 
          pentRooms and enjoy the top floor\'s comprehensive fitness and leisure center. 
          This sanctuary caters to a refined lifestyle, seamlessly combining luxury, recreation, 
          and well-being. Wintana Apartments defines urban living, harmonizing commercial vibrancy
          with residential elegance.

        </p>
        <p>
          As part of our commitment to luxury and well-being, the sauna is complemented by
          additional amenities on the top floor. Residents can also enjoy a refreshing swim
          in the pool, take advantage of massage facilities, savor delicious meals prepared
          in the fully equipped kitchen, engage in friendly competition in the billiards room,
          and unwind at the stylish bar. This top-floor experience at Wintana Apartments offers a
          holistic approach to relaxation, ensuring residents find solace and tranquility in the
          heart of the city
        </p>
      </Stack>
          <div className="w-[60%] bg-amber-200">
              
        <Image src="/living.webp" className='w-[100%] h-auto' alt='some' width={600} height={400}/>
      </div>
    
    </Box>
  );
};

export default WintanIntro;
