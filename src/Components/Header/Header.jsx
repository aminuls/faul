import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <nav className='flex justify-between px-20 p-10 mx-10 items-center'>
         <div>
            <h2 className='text-4xl font-bold hover: p-5'>Job Market</h2>
         </div>
         <div className='mr-6 space-x-6 '>
            <Link to="/statistics">Statistics</Link>
            <Link to="/applied">Applied Jobs</Link>
            <Link to="/blog">Blog</Link>
         </div>
         <div className='text-2xl font-semibold bg-indigo-500 px-8 py-3 rounded-lg '>
            <button className='text-white'>Star Applying</button>
         </div>
      </nav>
   );
};

export default Header;