import React from 'react'
import { Col } from 'react-bootstrap';
import data from '../../data/dataCard/dataCard.json'

function Sidebar() {
  return (
    <Col xs={4}>
      <aside>
        <select name="cars" id="cars">
          {data.houses.map(house => {
            return (
              house.option.map(op => {
                return (
                  <option>{}</option>
                )
              })

            )

          })}
        </select>
      </aside>
    </Col>
  )

}

export default Sidebar
