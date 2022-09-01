import React from 'react'
import { ComfortCon,FAQBanner, MainBanner,ProductsBanner } from '../containers'
import {AboutSec} from '../components'

const index = () => {
  return (
    <div>
      <MainBanner/>
      <AboutSec/>
      <ComfortCon/>
      <ProductsBanner/>
      <FAQBanner/>  
    </div>
  )
}

export default index