import Image from 'next/image';
import React from 'react';

const WintanIntro = () => {
  return (
    <div className='flex justify-between gap-5 px-5 py-2 max-w-[1224px] w-full mx-auto'>
          <div className="w-[40%] bg-blue-300 p-3">
              <h3 className='text-center font-bold text-[30px] py-5'>Wintana Apartment</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vel pharetra libero. Nulla quis purus vel nisi volutpat pharetra et quis magna. Phasellus vulputate venenatis ex, id rhoncus velit lobortis sed. Vestibulum in ante blandit, accumsan lorem a, aliquam sapien. Ut mattis arcu sit amet dolor condimentum elementum. Curabitur sodales augue metus, ac molestie mauris ultricies ut. Nunc porttitor, ante ac dapibus varius, lacus velit tristique nibh, eu volutpat odio leo id urna. Ut ac nisl sit amet augue fermentum porttitor. Nullam suscipit at mauris a efficitur. Vestibulum quam dui, maximus id sodales nec, varius in ante. Phasellus hendrerit rhoncus leo sed suscipit. Curabitur nec felis sed nibh ullamcorper venenatis at at justo.</p>
      </div>
          <div className="w-[60%] bg-amber-200">
              
        <Image src="/living.webp" className='w-[100%] h-auto' alt='some' width={600} height={400}/>
      </div>
    
    </div>
  );
};

export default WintanIntro;
