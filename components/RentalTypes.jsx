import React from 'react'
import Banner from './Banner'
import buy from "../public/assets/rent3.jpeg";
import rent from "../public/assets/rent2.jpeg";

const RentalTypes = () => {
  return (
    <div className='mt-28 mx-auto md:w-5/6 lg:w-4/6 pb-6 px-8' id='types'>
          <h2 className='text-center py-4 text-4xl font-bold uppercase'>
            Property Types
          </h2>
          <h3 className="text-3xl font-bold py-4 ">
            
          </h3>
          <Banner
          purpose="RENT A HOME"
          title1="Rental Homes for"
          title2="Everyone"
          desc1="Explore Apartments, Homes, Villas"
          desc2="And More..."
          buttonText="Explore Renting"
          linkName="/Search?listing_status=rent"
          imageUrl={rent}
        />
          <Banner
          purpose="Buy A HOME"
          title1="Find, Buy, & Own Homes for"
          title2="Everyone"
          desc1="Explore Apartments, Homes, Villas"
          desc2="And More..."
          buttonText="Explore Buying"
          linkName="/Search?listing_status=sale"
          imageUrl={buy}
        />
    </div>
  )
}

export default RentalTypes