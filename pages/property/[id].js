import React, { useState } from 'react'
import { baseUrl, fetchApi } from "../../Utils/fetchApi";
import { MdOutlineClose,MdOutlineCall } from 'react-icons/md';
import Link from 'next/link';
import { Property, PropertyDetail } from '../../containers';

// export const Contact = ({
//   propertyDetails: {
    
//     created_since,
//     furnished,
//     listing_idimages,
//     price,
//     rental_prices,
//     num_bathrooms,
//     num_bedrooms,
//     num_recepts,
//     num_floors,
//     agent_phone,
//     property_badge,
//     short_description,
//     displayable_address,
//     title,
//     is_premium_listing,
//     listing_id,
//     first_published_date,
//     listing_date,
//     image_url,
//   },
// }) => {
//   return (
//     <>
//       <section className="w-[50rem]  z-40 mx-auto h-fit p-8 ">
//         <MdOutlineClose size={23} className="float-right" />
       
//           <h4 className="border-2 border-green-200 rounded-xl w-full items-center flex   text-center font-bold px-4 py-2 ">
//             <MdOutlineCall size={23} /> Call now {agent_phone}
//           </h4>
        
//         <div className="p-4">
//           <h3>Message the agent</h3>
//           <form>
//             <input
//               type="textArea"
//               className="w-full h-[20rem] border-2"
//               placeHolder={`Hi, I found ${displayable_address} on RentalFort and would like to learn more about it. Thanks!`}
//             />
//             <label>
//               Full name *
//               <input type="text" />
//             </label>
//             <label>
//               Email address *
//               <input type="email" />
//             </label>
//             <label>
//               Phone number *
//               <input type="phone" />
//             </label>
//           </form>
//           <p>
//             Giving the agent as much information as you can about your
//             requirements will improve the quality of their response
//           </p>
//           <form>
//             <p>I would like</p>
//             <div>
//               <input type="radio" name="details" value="" id="details" />
//               <label for="details"></label>
//               <input type="radio" name="view" value="" id="view" />
//               <label for="view"></label>
//             </div>
//           </form>
//           <button>Send message</button>
//           <p>Sending to: name</p>
//         </div>
//         <p>
//           By submitting this form, you accept our{" "}
//           <a href="/Terms">terms & conditions</a> &{" "}
//           <a href="/Policy">privacy policy</a>.
//         </p>
//       </section>
//     </>
//   );
// };

export const Sidemenu = ()=>{
  return (
    <div className=" md:fixed mt-20">
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
        <p></p>
      </Link>
    </div>
  );
}

const PropertyDetails = ({
  properties: {
    images,
    price,
    rental_prices,
    num_bathrooms,
    num_bedrooms,
    num_recepts,
    num_floors,
    agent_phone,
    property_badge,
    short_description,
    displayable_address,
    title,
    is_premium_listing,
    listing_id,
    area,
    first_published_date,
    listing_date,
    image_url,
  },
}) => {
  // console.log(properties);
  const [contact, setContact] = useState(false);
  
  return (
    <section className="mx-auto md:w-5/6 lg:w-4/6 px-10 md:px-0">
      <div className=" w-full md:flex">
        <div className="w-full h-1/2  mb-20">
          <img src="" alt="house images" />
        </div>
        <Sidemenu/>
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
      <h1 className="font-bold text-4xl ">Detail page in progress.... </h1>
      <Link href="/Search">
        <h2>go back properties</h2>
      </Link>
      or
      <Link href="/">
        <h2>go back home</h2>
      </Link>
    </section>
  );
};
export default PropertyDetails;

export async function getServerSideProps({params:{id}}){
    const data = await fetchApi(
     `${baseUrl}/properties/list?listing_id=${id}`
    );
    return {
      
      props: {
        properties: data
      },
    };
    
}
