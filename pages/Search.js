import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {BsFilter} from 'react-icons/bs'
import {SearchFilters, SearchLocation } from '../components'
import error from '../public/assets/error1.jpg'
import { Property } from '../containers'
import { fetchApi,baseUrl } from '../Utils/fetchApi'
import { useGeneralContext } from "../components/context";
import Link from 'next/link'


const Search = ({properties}) => {
  const router = useRouter()
    const { openFilters, setSearchFilters, searchFilters } = useGeneralContext();
  return (
    <div className="relative h-full mb-48 z-10 ">
      <div className="bg-yellow-100 font-bold text-center min-h-[17rem] px-6  py-8">
        <h2 className="text-3xl py-4">Find your Happyness</h2>
        <p>Search properties for sale and to rent in the UK</p>

        <form className="sm:flex items-center justify-center py-8 gap-4 ">
          <div className="flex items-center gap-4 pt-4 sm:pt-0 justify-center">
            <Link href="/Search?listing_status=rent" passHref>
              <p className="rounded-xl bg-purple-200 px-4 py-2 w-fit cursor-pointer">
                For Rent
              </p>
            </Link>
            <Link href="/Search?listing_status=sale" passHref>
              <p className="rounded-xl bg-green-200 px-4 py-2 w-fit cursor-pointer">
                For Sale
              </p>
            </Link>
            <BsFilter className='cursor-pointer' size={23} onClick={() => openFilters()} />
          </div>
        </form>
        {/* <SearchLocation properties={properties}/> */}
      </div>
      {searchFilters && <SearchFilters />}
      <h3 className="text-5xl py-8 text-center  font-bold">
        Properties {router.query.listing_status}
      </h3>
      <div className="mx-auto  md:w-5/6 lg:w-5/6 pb-6 px-8 sm:px-0 h-auto">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </div>
      {properties.length === 0 && (
        <div className=" w-full text-center">
          <div className=" w-full justify-start sm:flex items-center">
            <Image alt="no result" src={error} width={400} height={300} />

            <p className="font-bold text-3xl sm:text-4xl pb-4 text-red-800">
              No results found!
            </p>
          </div>

          <span>
            Don't worry, we are working on adding more options for you. Please,
            try other suitable options.
          </span>
        </div>
      )}
    </div>
  );
}
export async function getServerSideProps({query}) {
    const listing_status = query.listing_status || "";
    const furnished = query.furnished || "";
    const category = query.category || "residential";
    const property_type = query.property_type || "flats";
    const minimum_beds = query.minimum_beds || "0";
    // const radius = query.radius|| "20";
    const keywords = query.keywords || "garden";
    const pets_allowed = query.pets_allowed || "no";
    const order_by = query.order_by || "price";
    // const maximum_price = query.maximum_price || " 1000000";
    const minimum_price = query.minimum_price || "0";
    const new_homes = query.new_homes || "";
    const price_frequency = query.price_frequency || "permonth";
    const area = query.area || 'Swansea'; 

  const data = await fetchApi(
    `${baseUrl}/properties/list?area=${area}&listing_status=${listing_status}&minimum_beds=${minimum_beds}&minimum_price=${minimum_price}&property_type=${property_type}&order_by=${order_by}&price_frequency=${price_frequency}&pets_allowed=${pets_allowed}&category=${category}&keywords=${keywords}&furnished=${furnished}&new_homes=${new_homes}&page_size=40`
  );
  

  return {
    props: {
      properties: data?.listing,
    },
  };
// furnished_state, category,property_type,bedrooms, price, property_status,
}

export default Search