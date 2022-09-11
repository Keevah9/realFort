import React from 'react'
import {ComfortSec, WhatReal} from '../components'
const ComfortCon = () => {
  return (
    <section className=' sm:px-8 md:px-0 mx-auto md:w-5/6 lg:w-4/6 pb-6 px-8 h-auto'>
        <ComfortSec/>
        <div className='flex md:flex-row flex-col-reverse gap-12 mt-32'>
          <WhatReal 
          photo1='/assets/use.jpeg'
          photo2='/assets/rent7.jpeg'
          photo3='/assets/real5.jpeg'
          heading='FOR YOU AND YOURS'
          desc="We will give you the feeling you can't get from anywhere else. Our houses feature styles if its own class and touch and you can add touches too."
          url="/Search?listing_status=sale"
          buttonText='see more'
          />
        </div>
    </section>
  )
}

export default ComfortCon