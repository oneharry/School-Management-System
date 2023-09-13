import React, { useState } from 'react'
import { FaCaretDown } from 'react-icons/fa6';

function NavItem({Icon,title,item,active,handleActive}) {
   const isActive = item === active;
   const backgroundColor = isActive ? "bg-orange-200" : "bg-white";
  return (
    <div
      className={`flex items-center p-4 space-x-2 cursor-pointer ${backgroundColor}`}
      onClick={() => handleActive(item)}
    >
      <Icon size={24} className="text-gray-700" />
      <span className="flex-1 text-gray-500">{title}</span>
      {/* <FaCaretDown color="gray" className="cursor-pointer" /> */}
    </div>
  );
}

export default NavItem