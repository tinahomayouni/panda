import React from 'react'
import Header from './header/header'
import Footer from './footer'
// import MapHolder from '../component/map/mapHolder'
import HouseListingWrp from '../component/card/houseListingWrp'


function Home() {
  return (
    <div>
      <Header />

      {/* <MapHolder/> */}
      <HouseListingWrp />
      <Footer />
    </div>
  )
}

export default Home
