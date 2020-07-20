import React from 'react'
import CardItem from './cardItem'
import { Container, Row, Col } from 'react-bootstrap';
import data from "../../data/dataCard/dataCard.json";
import './card.scss'
function card() {
  return (
    <div className="cardListing">
      <Container>
        <Row noGutters>
          <Col xs={8}>
            <div className="cardHolder">
              <Row>
                {data.houses.map(house => {
                  return (
                    <Col xs={4}>
                      <CardItem house={house} />
                    </Col>
                  )
                })}
              </Row>
            </div>
          </Col>
          <Col xs={4}>
            <aside>
              im side bar
              </aside>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
export default card
