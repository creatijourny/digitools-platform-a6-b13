import React from 'react';
import { IoCartOutline } from 'react-icons/io5';

const NavBar = () => {
  return (
    <div className="navbar px-10">
      <div className="navbar-start">
        <div className="flex items-center">
          <h2 className='font-bold text-3xl bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>DigiTools</h2>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <div className='relative inline-block'>
        <IoCartOutline className='h-10 w-auto' />
        <span className="absolute -top-2 -right-2 bg-transparent text-[#101727] px-1.5 rounded-full">
          0
        </span>
        </div>
        <a className="btn bg-transparent border-none rounded-full text-[#101727]">Login</a>
        <a className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">Get Started</a>        
      </div>
    </div>
  );

    
//     <div className="px-10 navbar bg-base-100 shadow-sm">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
//       </div>
//       <ul
//         tabIndex="-1"
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
//         <li><a>Item 1</a></li>
//         <li>
//           <a>Parent</a>
//           <ul className="p-2">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </li>
//         <li><a>Item 3</a></li>
//       </ul>
//     </div>
//     <a className="btn btn-ghost text-xl">daisyUI</a>
//   </div>
//   <div className="navbar-center hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       <li><a>Item 1</a></li>
//       <li>
//         <details>
//           <summary>Parent</summary>
//           <ul className="p-2 bg-base-100 w-40 z-1">
//             <li><a>Submenu 1</a></li>
//             <li><a>Submenu 2</a></li>
//           </ul>
//         </details>
//       </li>
//       <li><a>Item 3</a></li>
//     </ul>
//   </div>
//   <div className="navbar-end">
//     <a className="btn">Button</a>
//   </div>
// </div>
  
};

export default NavBar;