import React from 'react'
import { Container, Row } from 'react-bootstrap';
import HouseListing from './houseListing';
import Sidebar from '../sidebar/sidebar';
import './card.scss'



function HouseListingWrp() {
  return (
    <div className="cardListing">
      <Container>
        <Row noGutters>
          <HouseListing />
          <Sidebar />
        </Row>
      </Container>
    </div>
  )
}
export default HouseListingWrp
