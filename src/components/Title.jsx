import React from 'react';
import { title } from '../constants';

const Title = ({ sectionId }) => {
  const selectedTitle = title.find((item) => item.id === String(sectionId));
  if (!selectedTitle) return null;
  
  return (
    <div className='container '>
      <div className='flex flex-row max-lg:flex-col text-start'>
        <span className='border border-p1 px-4 py-2 bg-p1 text-h2 max-lg:text-h2Mob rounded-[14px] font-medium inline-block my-auto max-lg:mx-auto max-lg:mb-8'>
          {selectedTitle.name}
        </span>
        <p className='ml-10 text-h5 max-lg:text-p flex text-start items-center max-w-[580px] max-lg:text-center max-lg:m-0'>
          {selectedTitle.text}
        </p>
      </div>
    </div>
  );
}

export default Title;



