import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { cities, getFilterValues, } from "../Utils/cityData";
import { useRouter } from 'next/router';
import { style } from '@mui/system';
import { City } from '../components';

// import {Search} from '../pages'
const Cities = ({image}) => {
  const [isFocused, setIsFocused] = useState(false)
    const router = useRouter()
    const [filterCities, setFilterCities] = useState(cities)
    
    // console.log(filterCities[11])
    const searchProperties = (filterValues)=>{
    const path = '/Search'
    const {query} = router
    const values = getFilterValues(filterValues)
    values.forEach((item)=>{
       if(item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    })
    router.push({pathname: path, query:query})
  }
  return (
    
    <div className='sm:flex gap-8 justify-between items-center w-full h-full my-40 mx-auto md:w-5/6 lg:w-4/6 pb-6 px-8'>
        <div className='sm:w-1/2 h-full'>
            <h3 className='font-bold text-4xl pb-8'>Check out the biggest cities in the UK</h3>
        <p>You might find sweet deals on apartments and houses. We are big on comfortability and beauty at low costs. </p>
        </div>
        {filterCities.map((filter)=>(
          <div 
            className={`p-4 border-2 sm:w-1/2 flex flex-wrap gap-6 h-full mt-8 sm:mt-0`  }
            
              onClick={(e) => {searchProperties({ [filter.queryName]: e.target.value }) 
              console.log('hi')}}
              >

          <City filter={filter} />
          </div>
        ))}
    </div>
    
    
  )
}

export default Cities


// import React from 'react'
// import { useState } from 'react';
// import { filterData, getFilterValues } from "../Utils/FilterData";
// import { useRouter } from 'next/router';

// // import {Search} from '../pages'
// const Cities = () => {
//     const router = useRouter()
//     const [filterCities, setFilterCities] = useState(filterData)
//     console.log(filterCities)
//     const searchProperties = (filterValues)=>{
//     const path = '/Search'
//     const {query} = router
//     const values = getFilterValues(filterValues)
//     values.forEach((item)=>{
//        if(item.value && filterValues?.[item.name]) {
//         query[item.name] = item.value
//       }
//     })
//     router.push({pathname: path, query:query})
//   }
//   return (
//     <div className='flex justify-center items-center w-full h-full my-40'>
//         <div className='w-1/2 h-full'>
//             <h3 className='font-bold text-4xl pb-8'>Check out the biggest cities in the UK</h3>
//         <p>You might find sweet deals on apartments and houses. We are big on comfortability and beauty at low costs. </p>
//         </div>
        
//         {filterCities.map((filter)=>(
            
//           <div className={`py-4 ml-2 w-fit flex flex-wrap gap-6 h-full bg- `}
//             onChange={(e) => {searchProperties({ [filter.queryName]: e.target.value }) 
//               console.log('hi')}}
//             placeholder={filter.placeholder}>
//                {filter?.cities?.map((item) => (
//               <h3 value={item.value} className={`border-2 px-4 py-2`} >
//                 {item.name }
//               </h3>
//             ))}
//           </div>
          
//         ))}
//     </div>
    
//   )
// }

// export default Cities