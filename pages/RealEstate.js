import React from "react";
import buy from "../public/assets/buy.jpeg";
import rent from "../public/assets/rent.webp";
import Banner from "../components/Banner";

const RealEstate = () => {
  return (
    <section className="px-12 py-6">
      <h1 className="py-2 text-center text-5xl capitalize">hello</h1>
      <div className="py-4 ">
        <Banner
          purpose="RENT A HOME"
          title1="Rental Homes for"
          title2="Everyone"
          desc1="Explore Apartments, Homes, Villas"
          desc2="And More..."
          buttonText="Explore Renting"
          linkName="/search?purpose=for-rent"
          imageUrl={rent}
        />
        <div className="flex flex-wrap">{/* fetch and map */}</div>
        <Banner
          purpose="Buy A HOME"
          title1="Find, Buy, & Own Homes for"
          title2="Everyone"
          desc1="Explore Apartments, Homes, Villas"
          desc2="And More..."
          buttonText="Explore Buying"
          linkName="/search?purpose=for-sale"
          imageUrl={buy}
        />
        <div className="flex flex-wrap">{/* fetch and map */}</div>
      </div>
    </section>
  );
};

export default RealEstate;
