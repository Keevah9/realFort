import React from 'react'
import { News } from '../components/Newsletter'

const Footer = () => {
  return (
    <section className='w-full mx-auto  py-12 md:w-5/6 lg:w-4/6 pb-6 '>
      <div className='sm:flex justify-between items-center'>
        <h3 className='font-bold text-4xl'>
          <a href='/'>RentalFort</a>
        </h3>
        <div className="py-10 items-center  justify-end  " id="join">
          <News sub='Subscribe to our Newsletter'
        trust=''
        join='Subscribe'/>
        </div>
        
      </div>
      <h3 className='w-full text-center md:text-left text-[4.5vw] md:text-[3.2vw] lg:text-[2.5vw] tracking-[-0.05em] font-bold' >Improving Lives through sustainable infrastructures</h3>
      <div className='border-t my-8 border-1 mx-auto sm:mx-0 w-full'>
        </div>
      <div className='flex justify-between pt-4'>
        <div>
          <h3 className='font-bold text-3xl pb-6'>MENU</h3>
          <p><a href="/">Home</a></p>
          <p className='py-4'><a href='/About' className=''>All About us</a></p>
          <p ><a href='/RealEstate' >Our Housing</a></p>
          <p className='pt-4'><a href='/About/#contacts' className=''>Contact</a></p>
        </div>
        <div>
          <h3 className='font-bold text-3xl pb-6'>HELP</h3>
          <p className='py-4'><a href='/Policy'>Privacy Policy</a></p>
          <p><a href='/Terms'>Terms of use</a></p>
        </div>
        <div>
          <h3 className='font-bold text-3xl pb-6'>SOCIAL</h3>
          <p><a href="#">Facebook</a></p>
          <p className='py-4'><a href="#">LinkedIn</a></p>
          <p><a href="#">Twitter</a></p>
          <p className='py-4'><a href="#">Instagram</a></p>
        </div>
      </div>
    </section>
  )
}

export default Footer