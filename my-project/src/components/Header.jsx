import React from 'react'

function Header() {
  return (
    <div className="w-full h-[10vh]">
      <div className="w-3/5 mx-auto flex items-center justify-between py-2">
        <div>LOGO</div>
        <div className='flex items-center space-x-2'>
          <div>About</div>
          <div>features</div>
          <div>Contact us</div>
        </div>
        <div>
            <div>Login/Register</div>
        </div>
      </div>
    </div>
  );
}

export default Header