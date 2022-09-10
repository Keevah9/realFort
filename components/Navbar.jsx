import React,{useState,useEffect, useRef} from 'react'
import { AiOutlineShopping, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import {BiSearchAlt} from 'react-icons/bi'
import { useGeneralContext } from '../components/context'
import Link from 'next/link'
import { MenuItems } from '../components'
import { menuItems } from '../Utils/navData';
import {Sidebar} from '../components'
const Navbar = () => {
  const [menuToggle,setMenuToggle] = useState(false)
  return (
    <nav className='flex justify-between mx-auto items-center w-full h-auto lg:w-4/6 md:w-5/6'>
      <div className='flex justify-between w-1/2 md:w-fit md:justify-start gap-4 items-center '>
     <h3 className='font-bold text-4xl text-green-900'>
         <Link href='/'>RentalFort</Link>
        </h3>    
    
      <ul className="menus md:flex hidden">
        {menuItems.map((menu, index) => {
          const depthLevel = 0;
          return (
            <MenuItems
              items={menu}
              key={index}
              depthLevel={depthLevel}
            />
          );
        })}
      </ul>
      {menuToggle && (
        
        <div className='md:hidden flex absolute right-0 text-center px-8 bg-gray-500 top-0 z-40 w-full h-screen text-black'>
          <div className='p-12 relative my-8 bg-white w-full h-full'>
         <AiOutlineClose  size={30} onClick={()=> setMenuToggle(false)} className='absolute right-10'/>
          <Sidebar/>
          </div>
        </div>
        
      )}
      <div className='md:hidden block'>
        {!menuToggle 
? <AiOutlineMenu  size={27} onClick={()=> setMenuToggle(true)}/>
 : ''
}
      </div>
      </div>
      <Link href='/Search'>
        <BiSearchAlt/>
      </Link>
      
    </nav>
  );
};

export default Navbar;

