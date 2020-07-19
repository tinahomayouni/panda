import React from 'react'
import Header from './header/header'
import Footer from './footer'
// import MapHolder from '../component/map/mapHolder'
import Card from '../component/card/card'


function Home() {
  return (
    <div>
      <Header />

      {/* <MapHolder/> */}
      <Card />
      <Footer />
    </div>
  )
}

export default Home
