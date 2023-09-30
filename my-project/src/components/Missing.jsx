import React from 'react'
import { Link } from 'react-router-dom';

function Missing() {
  return (
    <div className='flex items-center justify-center h-screen flex-col'>
      <div>Oops!! not allowed here.</div>
      <Link to="/login">
      <button className='bg-orange-200 text-white rounded-lg p-1 text-sm'>Login/Sign-up</button>
      </Link>
    </div>
  );
}

export default Missing