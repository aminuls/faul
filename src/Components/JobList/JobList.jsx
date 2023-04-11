import React from 'react';
import { useLoaderData } from 'react-router-dom';

const JobList = ({list}) => {
   const { image, title, availability } = list;
   return (
      <div className=' w-56 h-40  p-4 bg-gray-200 border-x-neutral-400 rounded-md'>
         <img className='w-20 h-20 p-2' src={image} alt="" />
         <p className='px-2 font-semibold'>{title}</p>
         <p className='px-2 text-gray-500'><small>{availability}</small></p>
      </div>
   );
};

export default JobList;