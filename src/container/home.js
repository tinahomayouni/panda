import React from 'react'
import Header from './header/header'
import Footer from './footer'
import MapHolder from '../component/map/mapHolder'
import HouseListingWrp from './houseListingWrp/houseListingWrp'


function Home() {
  return (
    <>
      <Header />
      <MapHolder/>
      <HouseListingWrp />
      <Footer />
    </>
  )
}

export default Home
