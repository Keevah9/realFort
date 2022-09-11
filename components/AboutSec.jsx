import React from 'react'
import {ShortAbout} from '../components'

const AboutSec = () => {
  return (
    <div className='md:w-5/6 lg:w-4/6 pb-6  mx-auto'>
        <ShortAbout desc='We have developed new solutions to meet your needs, while leveraging your deep insights, practical needs, and broad range of capabilities in finding your new home'
        head='Improving Home and Families through buildings'
        btn='Find Yours'
        url='/RealEstate'
        head2='Strategic Consultancy'
        desc2='We will work with you from the beginning to house warming because we are interested. We will be involved inn the planning and chaning needs for your housing/apartment.'
            head3='Advisory'
        desc3='Leverage on our deep insights, practical expertise and broad range of capabilities to help you find the best home'
        photo1="/assets/rent1.jpeg"
        photo2="/assets/use5.jpeg"
        />
    </div>
  )
}

export default AboutSec