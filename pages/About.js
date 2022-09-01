import React from 'react'
import { Main,ShortAbout } from '../components'

// export const Aboutus = () => {
//   return (
//     <section className="my-12 relative sm:px-8 md:px-0">
      
      
//     </section>
//   );
// }
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
          head="We were first established as Contractor, now we are House builders"
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
        <div className="my-12">
          <h2 className="font-bold text-center sm:text-5xl text-3xl">WHY US</h2>
          <h4 className="italic font-bold">Why not us?...</h4>
          <h2>
            {/* UNPARALLELED SERVICE AND EXPERT ADVICE AT EVERY STEP OF THE REAL
            ESTATE TRANSACTION. */}
            We are all biochemically unique. Buying or selling your home should
            be, too.
          </h2>
          <p>
            With over 11 years of experience and closing $400 million in sales
            in the Virginia and California real estate markets, we continue to
            lead in the top 5% of agents worldwide. Our team has exceptional
            knowledge about our community and neighborhoods, which is backed by
            our affiliation with Berkshire Hathaway Home Services. Through
            Berkshire Hathaway, our ability to market and showcase your property
            is optimized with the most innovative technologies and resources
            available in today’s market.
          </p>
        </div>
      </>
    );
}
export default About