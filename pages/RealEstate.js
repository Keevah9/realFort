import React,{useState} from "react";
import buy from "../public/assets/buy.jpeg";
import rent from "../public/assets/rent3.jpeg";
import Banner from "../components/Banner";
import {Property} from "../containers";
import {baseUrl, fetchApi} from '../Utils/fetchApi'

const RealEstate = ({propertiesForRent, propertiesForSale}) => {
  console.log(propertiesForRent, propertiesForSale)
 
  return (
    <section className="py-6 w-full">
      <h1 className="py-2 text-center text-5xl capitalize"></h1>
      <div className="py-4 ">
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
        <div className="flex gap-12 flex-wrap">
          {propertiesForRent?.map((property) => (
            <>
              <Property key={property.id} property={property} />
              {/* <FirstPage key={property.id} property={property} /> */}
            </>
            
          ))}
          
        </div>
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
        <div className="flex gap-12 flex-wrap">
          {propertiesForSale.map((property) => (
           <>
              <Property key={property.id} property={property} />
              {/* <FirstPage key={property.id} property={property} /> */}
            </>
          ))}
        </div>
      </div>
      {/* <div className="flex gap-12 items-center justify-center">
        <span className="bg-black text-white px-4 py-1 rounded">
          <a href="/Property">1</a>
        </span> */}
        {/* <span className="bg-black text-white px-4 py-1 rounded">
          <a href="/FirstPage">2</a>
        </span>
        <span className="bg-black text-white px-4 py-1 rounded">
          <a href="/SecondPage">3</a>
        </span>
        <span className="bg-black text-white px-4 py-1 rounded">
          <a href="/Property">4</a>
        </span>
        <span className="bg-black text-white px-4 py-1 rounded">
          <a href="/Property">5</a>
        </span> */}
      {/* </div> */}
    </section>
  );
};

export async function getStaticProps(){
  
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?area=Swansea&listing_status=sale&page_size=15`
  );
   const propertyForRent = await fetchApi(
     `${baseUrl}/properties/list?area=Swansea&listing_status=rent&page_size=15`
   );

  return {
    props: {
      propertiesForSale: propertyForSale?.listing,
      propertiesForRent: propertyForRent?.listing,
    },
  };
}

export default RealEstate;
