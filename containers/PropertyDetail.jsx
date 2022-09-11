import React from 'react'
import Link from 'next/link'
const PropertyDetail = ({property: {images,price,rental_prices,num_bathrooms, num_bedrooms,num_recepts,num_floors, agent_phone, property_badge,short_description, displayable_address,title, is_premium_listing,listing_id,area, first_published_date, listing_date, image_url}}) => {
  return (
    <div className=" w-full flex md:w-5/6 lg:w-4/6 pb-6 px-8 h-auto">
      <div className="w-full h-1/2  mb-20">
        <img src="" alt="house images" />
      </div>
      <div className="fixed mt-20">
        <Link href="#gallery">
          <p>Gallery</p>
        </Link>
        <Link href="#overview">
          <p>Overview</p>
        </Link>
        <Link href="#propertyDetails">
          <p>Property details</p>
        </Link>
        <Link href="#agent">
          <p>{agent_phone}</p>
        </Link>
      </div>
      <div className="flex justify-between w-full mt-20 ">
        <div>
          <h4>{displayable_address}</h4>
          <p>update</p>
          <p></p>
          <p>price</p>
          <p>LAST UPDATE</p>
          <div>
            <h5>Highlights</h5>
          </div>
        </div>
        <div>
          <div className="border-2">
            <div className="">
              <img src="" alt="" />
              <h4>{agent_phone} hi</h4>
            </div>
            {/* <button onClick={() => setContact(true)}>
              {contact && <Contact propertyDetails={propertyDetails} />}
              {category} hi
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyDetail