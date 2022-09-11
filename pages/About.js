import React from 'react'
import { Main,ShortAbout, RentalFort, WhyRental, RentalTypes,Newsletter } from '../components'
import homeImg from "../public/assets/house1.jpeg";
const About =()=>{
    return (
      <section className="md:w-5/6 lg:w-4/6 pb-6 px-8 mx-auto">
        <Main head="ABOUT" image={homeImg} />
        <ShortAbout
          head="We were first established as Contractor, now we are Home builders"
          desc="We have since specialised in finding the best homes that suit
                your family and need conditions. We are grounded in strog
                infrastructures that have been reinforced in concrete frames"
          btn="Find Yours"
          head2="Sustainable"
          desc2="We first check that ground conditions, housing conditions and concrete frames are in good shape before we involve you. We first check that ground conditions,"
          head3="Specialists"
          desc3="We first check that ground conditions, housing conditions and concrete frames are in good shape before we involve you."
          photo1="/assets/use8.jpeg"
          photo2="/assets/use2.jpeg"
        />
        <RentalFort />
        <WhyRental />
        <RentalTypes />
        <div className="text-center mb-20" id="news">
          <h2 className="font-bold text-center sm:text-6xl text-4xl py-12">
            LET'S WORK TOGETHER
          </h2>
          <p className="pb-8 w-full sm:w-3/4 mx-auto">
            Let us know what you are looking for in a home and we will find it
            for you and see if this could be the start of something beautiful
          </p>
          <button className="px-6 py-3 border-2 uppercase bg-transparent text-black">
            Contact us
          </button>
        </div>
      </section>
    );
}
export default About