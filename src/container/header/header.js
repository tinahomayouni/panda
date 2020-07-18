import React from 'react'
import { Container } from 'react-bootstrap'
import HeaderTopBar from '../header/headerTopBar'
import InfoHeader from '../header/infoHeader'
import MainNavbar from '../header/mainNavbar'
import '../style.scss'




function Header() {
  return (
    <>
      <HeaderTopBar />
      <Container fluid className="header">
        <InfoHeader />
        <MainNavbar />
      </Container>
    </>
  )
}

export default Header
