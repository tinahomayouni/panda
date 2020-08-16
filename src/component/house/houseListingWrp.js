import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import HouseListing from './houseListing';
import Sidebar from '../sidebar/sidebar';
import './house.scss'



function HouseListingWrp() {
  return (
    <div className="cardListing">
      <Container>
        <Row>
          <Col xs={8}>
            <HouseListing />
          </Col>
          <Col xs={4}>
            <Sidebar />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default HouseListingWrp
