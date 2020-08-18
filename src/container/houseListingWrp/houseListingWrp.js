import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import HouseListing from '../../component/house/houseListing';
import Sidebar from '../../component/sidebar/sidebar';
import '../../component/house/house.scss'



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
