import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import { MdOutlineClose, MdCancel } from 'react-icons/md'
import Image from 'next/image'
import { filterData, getFilterValues } from '../Utils/filterData'
import { baseUrl, fetchApi } from '../Utils/fetchApi';
import {BsFilter} from 'react-icons/bs'
import { useGeneralContext } from '../components/context'
import {Spinner, } from '@chakra-ui/react';

const SearchFilters = () => {
  const router = useRouter()
  const { filters, setfilters, searchFilters, setSearchFilters } = useGeneralContext();
  const [searchTerm, setSearchTerm] = useState('');
  const [locationData, setLocationData] = useState();
  const [showLocations, setShowLocations] = useState(false);
  const [loading, setLoading] = useState(false);

  const searchProperties = (filterValues)=>{
    const path = router.pathname
    const {query} = router
    const values = getFilterValues(filterValues)
    values.forEach((item)=>{
      if(item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    })
    router.push({pathname: path, query:query})
  }
   useEffect(() => {
    if (searchTerm !== '') {
      const fetchData = async () => {
        setLoading(true);
        const data = await fetchApi(`${baseUrl}/auto-complete?search_term=${searchTerm}`);
        setLoading(false);
        setLocationData(data?.suggestions);
        console.log(locationData)
      };

      fetchData();
    }
  }, [searchTerm]);

  return (

    <div className='top-0 z-40 right-0 border-2 pb-4 px-6 absolute overflow-hidden  bg-white flex flex-wrap gap-4 w-full mx-auto'>
      <div className='flex mx-auto justify-end w-full pb-2'>
        <MdOutlineClose size={23} onClick={()=>setSearchFilters(false)}/>
      </div>
      
      {filters.map((filter)=>(
          <div className='py-2 mx-auto' key={filter.queryName}>
            {filter.queryName}
            <select 
            onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}
            placeholder={filter.placeholder}
            className='border-2 ml-2 border-green-900 w-fit'
            >
              {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name }
                
              </option>
            ))}
            </select>
          </div>
        ))}

    <div className='flex w-full h-full flex-col class
    '>
      
        <button onClick={() => setShowLocations(!showLocations)} className = 'font-bold text-2xl  mt-2 ' >
          Search Location?
        </button>
        {showLocations && (
          <div className='flex flex-col relative pt-2'>
            <input
              placeholder='Type Here'
              value={searchTerm}
              className='w-[350px] mx-auto focus:border-gray-300 border-2 mt-4'
              
            />
            {searchTerm !== '' && (
              <MdCancel size={23}
                className='absolute cursor-pointer right-0 top-[-2rem] z-80'
                onClick={() => setSearchTerm('')}
              />
            )}
             {loading && <Spinner margin='auto' marginTop='3' />}
            {showLocations && (
              <div className='h-[300] overflow-auto'>
                {locationData?.map((location) => (
                  
                  <div
                    key={location.id}
                    onClick={() => {
                      searchProperties({ area: location.value});
                      setShowLocations(false);
                      setSearchTerm(location.value);
                    }}
                  >
                    <p className='cursor-pointer bg-gray-200 p-2 border-b-2 border-gray-100'  >
                      {location.value}
                    </p>
                  </div>
                )) }
                {!loading && !locationData?.length && (
                  <div className='flex justify-center items-center flex-col m-6'  >
                    <Image src='' />
                    <p className='text-2xl mt-4'>
                      Searching on your behalf...!
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>  

    )
}

export default SearchFilters