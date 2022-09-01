import React, {useState} from 'react'
import {BiSearchAlt} from 'react-icons/bi'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import Link from 'next/link'
export const Menu = ()=>{
  return(
    <div>
      <ul className='sm:flex gap-8 justify-start items-center'>
        <li><a href='/'>Home</a> </li>
        <li><a href='/About'>About</a> </li>
        <li><a href='/RealEstate'>Products</a></li>
      </ul>
    </div>
    
  )
}

const Navbar = () => {
  // const {showCart, setShowCart, totalQty} = useStateContext()
  const [toggle, setToggle] = useState(false)
  return (
    <nav className='flex justify-between mx-auto items-center w-full h-auto lg:w-4/6 md:w-5/6'>
      <div className='h-full hidden sm:block'>
        <Menu/>
      </div>
      <div className='sm:w-1/6'>
        <h3 className='font-bold text-4xl text-green-900'>
          <Link href='/'>RentalFort</Link>
        </h3>
      </div>
      

      {toggle &&
        <div className='sm:hidden block absolute left-0 text-left px-8 h-full py-12 w-full top-20 bg-gray-200 z-40 opacity-90 flex justify-between'>
          <Menu/>
          <AiOutlineClose color='black' size={27} onClick={()=> setToggle(false)}/>
        
    
        </div>
      }
      <div className='sm:hidden block'>
        {!toggle ?  ( <AiOutlineMenu color='black' size={27} onClick={()=> setToggle(true)}/>
          ) : 
          '' }
      </div> 
        <a href='#'><BiSearchAlt/></a>
    
    </nav>
  )
}

export default Navbar