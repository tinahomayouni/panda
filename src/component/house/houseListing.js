import React from 'react'
import HouseItem from './houseItem'
import { Row, Col } from 'react-bootstrap';
import data from "../../data/dataCard/dataCard.json";


function HouseListing() {
  return (
    <Col xs={8}>
      <div className="cardHolder">
        <Row>
          {data.houses.map(house => {
            return (
              <Col xs={4}>
                <HouseItem house={house} />
              </Col>
            )
          })}
        </Row>
      </div>
    </Col>
  )
}

export default HouseListing
