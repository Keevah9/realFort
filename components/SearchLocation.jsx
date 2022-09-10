// import React, {useEffect, useState} from 'react'
// import { useRouter } from 'next/router';
// import Link from 'next/link'
// import { MdCancel } from 'react-icons/md';
// import {BsFilter} from 'react-icons/bs'
// import { useGeneralContext } from './context';
// import { filterData, getFilterValues } from '../Utils/FilterData'
// import {Spinner, } from '@chakra-ui/react';
// import { baseUrl, fetchApi } from '../utils/fetchApi';
// import Image from 'next/image';
// const SearchLocation = ({properties}) => {
//      const router = useRouter()
//   const { filters, setfilters, searchFilters, setSearchFilters,openFilters} = useGeneralContext();


//   const searchProperties = (filterValues)=>{
//     const path = router.pathname
//     const {query} = router
//     const values = getFilterValues(filterValues)
//     values.forEach((item)=>{
//       if(item.value && filterValues?.[item.name]) {
//         query[item.name] = item.value
//       }
//     })
//     router.push({pathname: path, query:query})
//   }
   
//       const [searchTerm, setSearchTerm] = useState('');
//   const [locationData, setLocationData] = useState();
//   const [showLocations, setShowLocations] = useState(false);
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     if (searchTerm !== '') {
//       const fetchData = async () => {
//         setLoading(true);
//         const data = await fetchApi(`${baseUrl}/auto-complete?search_term=${searchTerm}`);
//         setLoading(false);
//         setLocationData(data?.suggestions);
//         console.log(locationData)
//       };

//       fetchData();
//     }
//   }, [searchTerm]);
//   return (
//     <div className='flex w-full  flex-col'>
      
//         <button onClick={() => setShowLocations(!showLocations)} className = 'font-bold text-2xl  mt-2 ' >
//           Search Location?
//         </button>
//         {showLocations && (
//           <div className='flex flex-col relative pt-2'>
//             <input
//               placeholder='Type Here'
//               value={searchTerm}
//               className='w-[350px] mx-auto focus:border-gray-300 border-2 mt-4'
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             {searchTerm !== '' && (
//               <MdCancel size={23}
//                 className='absolute cursor-pointer right-0 top-[-2rem] z-80'
//                 onClick={() => setSearchTerm('')}
//               />
//             )}
//              {loading && <Spinner margin='auto' marginTop='3' />}
//             {showLocations && (
//               <div className='h-[300] overflow-auto'>
//                 {locationData?.map((location) => (
//                   // console.log(location)
//                   <div
//                     key={location.id}
//                     onClick={() => {
//                       searchProperties({ area: location.value});
//                       setShowLocations(false);
//                       setSearchTerm(location.value);
//                     }}
//                   >
//                     <p className='cursor-pointer bg-gray-200 p-2 border-b-2 border-gray-100'  >
//                       {location.value}
//                     </p>
//                   </div>
//                 ))}
//                 {!loading && !locationData?.length && (
//                   <div className='flex justify-center items-center flex-col m-6'  >
//                     <Image src='' />
//                     <p className='text-2xl mt-4'>
//                       Searching on your behalf...!
//                     </p>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         )}
//         <div className="flex items-center gap-4 pt-4 sm:pt-0 justify-center">
//             <Link href="/Search?listing_status=rent" passHref>
//               <p className="rounded-xl bg-purple-200 px-4 py-2 w-fit">
//                 For Rent
//               </p>
//             </Link>
//             <Link href={`/Search?listing_status=sale&area=${area}`} passHref>
//               <p className="rounded-xl bg-green-200 px-4 py-2 w-fit">
//                 For Sale
//               </p>
//             </Link>
//             <BsFilter size={23} onClick={() => openFilters()} />
//           </div>
//       </div>
//   )
// }

// export default SearchLocation