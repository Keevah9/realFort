import React from 'react'
import { Main,ShortAbout, RentalFort, WhyRental, RentalTypes,Newsletter } from '../components'

const About =()=>{
    return (
      <>
        <Main />
        <div className="my-16">
          <h2 className="font-bold text-center sm:text-6xl text-4xl">
            ABOUT US
          </h2>
        </div>
        <ShortAbout
          head="We were first established as Contractor, now we are Home builders"
          desc="We have since specialised in finding the best homes that suit
                your family and need conditions. We are grounded in strog
                infrastructures that have been reinforced in concrete frames
              "
          btn="Find Yours"
          head2="Lorem ipsum dolor sit amet."
          desc2="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            nulla deserunt ex illum iure libero similique tempora recusandae
            sapiente dolor!"
          head3="Lorem ipsum dolor sit amet."
          desc3="Lorem ipsum dolor sit amet consectetur, adipisicing elit. "
          photo1="/assets/real1.jpeg"
          photo2="/assets/real1.jpeg"
        />
        <RentalFort/>
        <WhyRental/>
        <RentalTypes/>
        <Newsletter/>
      </>
    );
}
export default About