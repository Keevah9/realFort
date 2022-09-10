// import React, { useState } from "react";
// import {
//   MdAnchor,
//   MdOutlineEmail,
//   MdOutlineFavorite,
//   MdBed,
//   MdOutlineBathtub,
//   MdOutlineCall,
// } from "react-icons/md";
// import { TbDirections } from "react-icons/tb";

// const FirstPage = ({
//   property: {
//     images,
//     price,
//     rental_price,
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
//   },
// }) => {
//   const [call, setCall] = useState(false);
//   return (
//     <>
//       <section
//         className={`h-fit border-2 ${
//           is_premium_listing === 1
//             ? " border-purple-200 border-2"
//             : "border-gray-400"
//         }`}
//       >
//         {is_premium_listing === 1 && (
//           <div className="bg-purple-200 text-white h-[4rem] w-full">
//             <p className="rounded-2xl bg-purple-600 w-fit px-4 py-2">Premium</p>
//           </div>
//         )}
//         <div>
//           <img src="" alt="house to rent/sell" />
//           <div className="border-b-2">
//             <h3></h3>
//             <h4></h4>
//             <span>
//               <MdBed />
//             </span>
//             <span>
//               <MdOutlineBathtub />
//             </span>
//             <p></p>
//             <h4></h4>
//             <p></p>
//             <p></p>
//             <p>
//               {" "}
//               <TbDirections />{" "}
//             </p>
//             <p>
//               {" "}
//               <MdAnchor />{" "}
//             </p>
//             <span className="bg-gray-400 px-6 py-3"></span>
//           </div>
//           <div>
//             <div>
//               <span></span>
//               <span></span>
//             </div>
//             <div>
//               <p>
//                 {" "}
//                 <MdOutlineCall />
//                 {call ? (
//                   <span onClick={() => setCall(false)}> {agent_phone} </span>
//                 ) : (
//                   <span onClick={() => setCall(true)}> call </span>
//                 )}
//               </p>
//               <p></p>
//               <p></p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default FirstPage;
// // export async function getServerSideProps({ params: { id } }) {
// //   const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

// //   return {
// //     props: {
// //       propertyDetails: data,
// //     },
// //   };
// // }
