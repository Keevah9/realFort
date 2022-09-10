// import React, {useState,useEffect, useRef} from 'react'
// import {BiSearchAlt} from 'react-icons/bi'
// import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
// import { rent, sale } from '../Utils/navData'
// import Link from 'next/link'
// import { useGeneralContext } from './context'     

// export const Rents = ()=>{
  
//   return(
//      <div className=' bg-black text-white'>
//         <a href='/Search?listing_status=rent'>all rental listings</a>  
//         <a href='/Search?listing_status=rent&property_type=flats'>flats for rent</a>  
//         <a href='/Search?listing_status=rent&property_type=terraced'>terraced houses for rent</a>  
//         <a href='/Search?listing_status=rent&property_type=detached'>detached houses for rent</a>  
//         <a href='/Search?listing_status=rent&property_type=semidetached'>semi-detached houses for rent</a>  
//         <a href='/Search?listing_status=rent&property_type=park_home'>park home for rent</a>  
//       </div>
//   )
// }

// export const Sales = ()=>{
  
//   return(
//      <div className='bg-black text-white'>
//         <a href='/Search?listing_status=sale'>all rental listings</a>  
//         <a href='/Search?listing_status=sale&property_type=flats'>flats for rent</a>  
//         <a href='/Search?listing_status=sale&property_type=terraced'>terraced houses for rent</a>  
//         <a href='/Search?listing_status=sale&property_type=detached'>detached houses for rent</a>  
//         <a href='/Search?listing_status=sale&property_type=semidetached'>semi-detached houses for rent</a>  
//         <a href='/Search?listing_status=sale&property_type=park_home'>park home for rent</a>  
//         <a href='/Search?listing_status=sale&property_type=farmsland'>farmsland</a>  
//         <a href='/Search?listing_status=sale&property_type=land'>land for rent</a>   
//       </div>
//   )
// }

// export const Menu = ()=>{
//   const {
//     openSubmenu,
//     closeSubmenu, closeRentMenu , openRentMenu, salesShow, rentsShow
//   } = useGeneralContext();
//   const display = (e)=>{
//     openSubmenu()
//   }
//   const rentDisplay = (e)=>{
//     openRentMenu()
//   }
//   const handleDisplay =(e)=>{
//     console.log(e.target)
//     if(!e.target.classList.contains('capitalize')){
//       closeSubmenu()
//       closeRentMenu()
//     }
//   }
//   return(
//     <div>,
//       <ul className='sm:flex gap-8 justify-start items-center relative' onMouseOver={handleDisplay}>
//         <li className='capitalize'><a href='/'>Home</a> </li>
//         <li className='capitalize'><a href='/About'>About</a> </li>
//         <li className='capitalize'><a href='/RealEstate'>Products</a></li>
        
//           <li className='cursor-pointer capitalize'onMouseOver={rentDisplay}>Rent</li>
//           <aside className={`${
//         rentsShow
//           ? " absolute top-[4rem] left-[50%] z-80 mt-6 translate-x-[-50%] block"
//           : "hidden"
//       } `}>
//         <Rents />
//           </aside>
        

       
//         <li className='cursor-pointer capitalize'onMouseOver={display}>Sale</li>
//           <aside className={`${
//         salesShow
//           ? " absolute p-8 top-[2rem] left-[50%] z-40 mt-6 translate-x-[-50%] block"
//           : "hidden"
//       } `} >
//         <Sales />
//           </aside>
//       </ul>
//     </div>
    
//   )
// }

// const Navbar = () => {
//   // const {showCart, setShowCart, totalQty} = useStateContext()
  
//   const [toggle, setToggle] = useState(false)
//   return (
//     <nav className='flex justify-between mx-auto items-center w-full h-auto lg:w-4/6 md:w-5/6'>
//       <div className='border-2'>
//         <h3 className='font-bold text-4xl text-green-900'>
//           <Link href='/'>RentalFort</Link>
//         </h3>
//       </div>
//       <div className='h-full hidden sm:block'>
//         <Menu/>
//       </div>
//       {toggle &&
//         <div className='sm:hidden block absolute left-0 text-left px-8 py-12 w-full top-20 bg-gray-200 z-40 opacity-90 flex justify-between h-1/3'>
//           <Menu/>
//           <AiOutlineClose color='black' size={27} onClick={()=> setToggle(false)}/>
        
    
//         </div>
//       }
//       <div className='sm:hidden block'>
//         {!toggle ?  ( <AiOutlineMenu color='black' size={27} onClick={()=> setToggle(true)}/>
//           ) : 
//           '' }
//       </div> 
//         <a href='/Search'><BiSearchAlt/></a>
    
//     </nav>
//   )
// }

// export default Navbar









// import React,{useState,useEffect, useRef} from 'react'
// import { AiOutlineShopping, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
// import { useGeneralContext } from '../components/context'
// // import sublinks from '../Utils/navData'
// import {Sidebar} from '../components'
// import Link from 'next/link'


// export const Menu=()=>{
//   const { openSubmenu,openSidebar, closeSubmenu} = useGeneralContext()
   
//   const display = (e)=>{
//     const page = e.target.textContent
//     const currentLocation = e.target.getBoundingClientRect()
//     console.log(currentLocation, openSubmenu)
//     const center = (currentLocation.left + currentLocation.right) / 2
//     console.log(center)
//     const bottom = currentLocation.bottom - 3
//     openSidebar()
//   }
//   const handleDisplay =(e)=>{
//     // console.log(e.target)
//     if(!e.target.classList.contains('capitalize')){
//       closeSubmenu()
//     }
//   }
//   return(
//     <ul className='sm:flex gap-12 justify-center items-center text-black' onMouseOver={(e)=>handleDisplay(e)}>
//       <li><a href='/'>Home</a> </li>
//         <li><a href='/About'>About</a> </li>
//         <li><a href='/RealEstate'>Products</a></li>
//     <li>
//       <button className='capitalize' onMouseOver={(e)=>{display(e)
//       console.log('hi')
//       }}>rent</button>
//     </li>
//     <li>
//       <button className='capitalize' onMouseOver={(e)=>display(e)}>sale</button>
//     </li>
//   </ul>
//   )
  
// }
// const Navbar = () => {
  
//   const [menuToggle,setMenuToggle] = useState(false)
//   const [bodyScroll, setBodyScroll] = useState(true);
//   const { openSubmenu, openSidebar, closeSubmenu,isSidebarOpen } = useGeneralContext()
  

  
//   return (
//     <nav className=' sm:mx-auto text-white flex md:justify-center w-full justify-between  lg:w-4/6 gap-12 py-8 '>
//        <h3 className='font-bold text-4xl text-green-900'>
//         <Link href='/'>RentalFort</Link>  </h3>
//       <div className='h-full flex  gap-16 w-full justify-between items-center hidden md:block'>
//         <Menu />
        
//       </div>
//       <button className='bg-black sm:block hidden text-white px-4 rounded-lg py-2 w-[100px] capitalize'>Sign in</button>
      
// {menuToggle && (
        
//         <div className='md:hidden block absolute right-0 text-center px-8 bg-gray-500 top-0  w-full text-black  z-40 h-[100%] border-2 overflow-hidden'>
//           <div className='p-4 relative my-8 bg-white w-full h-[100%] overflow-hidden' >
//          <AiOutlineClose  size={30} color='black' onClick={()=> setMenuToggle(false)} className='absolute right-10 border-2'/>
//           <Sidebar/>
//           </div>
//         </div>
        
//       )}
      
      

// <div className='md:hidden block'>
//         {!menuToggle 
// ? <AiOutlineMenu  size={27} color='black' onClick={()=> setMenuToggle(true)}/>
//  : ''
// }
//       </div>
//     </nav>
//   )
// }

// export default Navbar











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
      <a href='/Search'><BiSearchAlt/></a>
    </nav>
  );
};

export default Navbar;

