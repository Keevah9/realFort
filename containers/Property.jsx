import React,{useState} from 'react'
import {MdAnchor,MdOutlineEmail, MdOutlineFavorite, MdBed, MdOutlineBathtub, MdOutlineCall, MdOutlineClose, MdOutlineArrowDropDown} from 'react-icons/md'
import {TbDirections} from 'react-icons/tb'
import millify from 'millify'
import Image from 'next/image' 
import Link from 'next/link'

export const Show = ()=>{
    const [arrow, setArrow] = useState(false)

    return(
        <>
            <div className='p-6 text-xl relative'>
                
                <h3 className='pb-2 font-bold'>Property temporarily hidden</h3>
                <p className='pb-6'>You can show this property anytime</p>
                <div>
                    <h4 className='border-t pt-6 flex items-center gap-2'>Tell us why you have hidden this property 
                <p>
                    {arrow ?
                    <div className=''>
                        <ul className=' absolute left-0 top-[12rem] z-40 bg-green-100 px-10 py-4 rounded-xl' onClick={()=>{
                            setArrow(false)
                        }
                        }>
                            <li className='font-bold'>Select a reason for hiding this property</li>
                            <li className='py-2 cursor-pointer'>It is overpriced</li>
                            <li className='cursor-pointer'>There is only a few detail</li>
                            <li className='py-2 cursor-pointer'>It is misdesrcibed</li>
                            <li className='cursor-pointer'>It seems fraudulent</li>
                            <li className='pt-2 cursor-pointer'>It requires a lot of works</li>
                        </ul>
                    </div>
                    :
                    <span >
                        <MdOutlineArrowDropDown size={23} onClick={()=>setArrow(true)}/>
                    </span>
                   
                }
                    
                    </p>
                </h4>
                </div>
                
            </div>
        </>
    )
}

const Property = ({property: {images,price,rental_prices,num_bathrooms, num_bedrooms,num_recepts,num_floors, agent_phone, property_badge,short_description, displayable_address,title, is_premium_listing,listing_id,area, first_published_date, listing_date, image_url}}) => {
    const [call, setCall] = useState(false)
    const [showPpty, setShowPpty] = useState(true)
    const [show, setShow] = useState(true)

  return (

    <section className={`mb-10 relative mx-auto sm:w-5/6 lg:w-4/6 pb-6  h-4/6 w-full rounded-xl text-2xl ${is_premium_listing === 1 ? 'border-purple-300 border-2  bg-purple-300 ' : 'border-gray-300 border ' }` } >
        
        {is_premium_listing === 1 && 
            <div className='bg-purple-300 text-white h-[6rem] w-full rounded-2xl p-5'>
                <p className='rounded-2xl bg-purple-600 w-fit px-4 py-2'>Premium</p>
            </div>
        }
                {showPpty ?
                    <div className={` ${is_premium_listing === 1 ? 'border-purple-600 rounded-xl border' : '' }` }>
                    <Link href={`/property/${listing_id}` } passHref>
                    <div className={` bg-white md:flex relative gap-8 w-full h-full rounded-t-xl` }>
                       
                        <>
                        <div className=' h-full md:w-1/2 relative'>
                            {images &&
                                <Image 
                                    src={image_url}
                                    alt='house to rent/sell'
                                    width={500}
                                    layout='responsive'
                                    height={380}
                                    className='  rounded-tl-xl h-full relative'
                                    />
                            }
                            {property_badge && <p className='absolute  top-[1rem] p-4 left-[1rem] rounded-xl bg-white text-black font-bold'>Newly added</p> }
                        </div>
                        
                        <div className='py-6 px-4 md:w-1/2  relative'>
                            <div className='py-6'>
                                <h3 className='text-[1.9rem] font-bold pb-2'>
                                    ${rental_prices ?  rental_prices.per_month : price}
                                </h3>
                                <h4>${rental_prices ?  rental_prices.per_week : price}</h4>
                            </div>
                            
                            <div className='flex gap-8 py-4'>
                                <span className='flex gap-2'>
                                    <MdBed size={23}/> {num_bedrooms}
                                </span>
                                <span className='flex gap-2'>
                                    <MdOutlineBathtub size={23}/>
                                    {num_bathrooms}
                                </span>
                                <span className='flex gap-2'>
                                    <MdOutlineBathtub size={23}/>
                                    {num_recepts}
                                </span>
                            </div>
                            <div className='py-4'>
                                <p className='font-medium'>{title}</p>
                                <p className='text-gray-500' >{displayable_address}</p>
                            </div>
                            <div className='flex gap-4'>
                                <p> <TbDirections size={23}/> </p>
                                <p> <MdAnchor size={23}/> </p>
                                {/* <span className='bg-gray-400 px-6 py-3'></span> */}
                                </div>
                            </div> 
                            </> 
                         
                        </div>
                        </Link>
                    <div className='flex justify-between items-center p-6 border-t-2 rounded-b-xl bg-white'>
                        <div>
                            <span className='text-gray-500 text-xl'>Listed on {listing_date}</span>
                            {/* <span></span> */}
                        </div>
                        <div className='flex items-center justify-end gap-4'>
                            <p className='flex items-center gap-2 sm:flex hidden'> <MdOutlineCall size={23}/> 
                                {call ? 
                                    <p className='border-b-1 border-purple-100' onClick={()=>setCall(false)}> {agent_phone} </p> 
                                    : 
                                    <button onClick={()=>setCall(true)}> Call </button>  }  
                            </p>
                            <p className='flex items-center gap-2'><MdOutlineEmail/> <button className='border-b-1 border-purple-100'>Email</button></p>
                            <p className='flex items-center gap-2'> <span className='border-b-1 border-purple-100'>Save</span></p>
                        </div>
                    </div>
                    </div>
                    
                : <Show/>}
        <div className='absolute pt-6 top-0 right-[1rem]'>
            {show ? <MdOutlineClose size={23} onClick={()=>{setShowPpty(false)
                                setShow(false)}}/>
                                : <p onClick={()=>{setShowPpty(true)
                                setShow(true)}}>Show</p>
                        }
                        
        </div>
                          
    </section>
    
  )
}

export default Property



