import React from 'react'

const ShortAbout = ({desc,photo1, photo2,head,head2,head3, desc3,url, desc2, btn}) => {
  return (
    <section className="my-12 relative sm:px-8 md:px-0 mx-auto pb-6 px-8">
    <div className='sm:flex gap-12'>
            <h2 className='text-center sm:text-left text-[5vw] sm:text-[3vw] lg:text-[2.5vw] tracking-[-0.05em]  font-bold sm:w-1/2'>{head}</h2>
            <div className='sm:w-1/2'>
                <div className='border-t border-2 mx-auto sm:mx-0 w-[15rem]'>
        </div>
            <p className='pt-8'>
                {desc}
            </p>
            <a className='px-4 py-2 bg-black text-white rounded-xl block w-fit my-6' href={url}>{btn}</a>
            </div>
            
        </div>
        <div className="relative border-4 border-transparent md:block hidden mt-20">
        <div className="bg-yellow-300 text-black w-[35rem] p-8 absolute right-[24rem] top-[-2rem] ">
          <h4 className="font-bold text-3xl pb-6">
            {head2}
          </h4>
          <p>
            {desc2}
          </p>
          
        </div>
        <div className="bg-white text-black max-w-[23rem] p-8 absolute top-[-4rem] right-[-1.2rem]">
          <h4 className="font-bold text-3xl pb-6">{head3}</h4>
          <p>
            {desc3}
          </p>
        </div>
        <div className="flex gap-6 mt-40">
          <img
            src={photo1}
            alt="houses"
            className="h-[23.5rem] w-1/3 block mx-auto md:mx-0 "
          />
          <img
            src={photo2}
            alt="houses"
            className="h-[23.5rem] w-3/4"
          />
        </div>
      </div>
    </section>
  )
}

export default ShortAbout