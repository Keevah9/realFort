import React from 'react'
import { ComfortCon,FAQBanner, MainBanner,ProductsBanner,Cities } from '../containers'
import {AboutSec} from '../components'
// import {Search} from  '../pages/Search'
const index = () => {
  return (
    <div>
      <MainBanner/>
      <AboutSec/>
      <Cities/>
      <ComfortCon/>
      <ProductsBanner/>
      <FAQBanner/>  
    </div>
  )
}

export default index