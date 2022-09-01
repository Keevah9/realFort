import React from 'react'
import { News } from '../pages/Newsletter'

const Footer = () => {
  return (
    <div className='w-full mx-auto md:w-5/6 lg:w-4/6 pb-6 px-10 h-auto md:px-0'>
      <div>
        <h2>RENTALFORT</h2>
        <News sub='Subscribe to our Newsletter'
        trust='Trust us, No spam. Just importance information, updates, and promos'
        join='Subscribe'/>
      </div>
    </div>
  )
}

export default Footer