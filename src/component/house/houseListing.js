import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import HouseItem from './houseItem'
import { Row, Col } from 'react-bootstrap';
import data from "../../data/dataCard/dataCard.json";



function HouseListing() {
  const { filters: filterFromReducer } = useSelector(state => state.housesReducer)
  const [filteredData, setFilteredData] = useState(data.houses)


  useEffect(() => {

    // console.log(filterFromReducer, 'filterFromReducer');
    // if (filterFromReducer && filterFromReducer.categories) {//when afteresh undefined shod ba khodesh and mikonim
    //   const filteredHouses = data.houses.filter(house => {
    //     console.log(house, "house")
    //     return house.category === filterFromReducer.categories
    //   })
    //   setFilteredData(filteredHouses);
    // } else {
    //   setFilteredData(data.houses);
    // }
    // if (filterFromReducer && filterFromReducer.room) {//when afteresh undefined shod ba khodesh and mikonim
    //   const filteredHouses = data.houses.filter(house => {
    //     const naturalOptions = house.option.reduce((total, opt) => {
    //       Object.keys(opt).forEach(key => total[key] = opt[key])
    //       return total;
    //     }, {})

    //     console.log(naturalOptions, "naturalOptions");
    //     if (naturalOptions.room == filterFromReducer.room) {
    //       return house
    //     }
    //   })

    //   console.log(filteredHouses, "filteredHouses")
    //   setFilteredData(filteredHouses);
    // } else {
    //   setFilteredData(data.houses);
    // }

  }, [filterFromReducer]);

  return (
    <Col xs={8}>
      <div className="cardHolder">
        <Row>
          {filteredData.map(house => {
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
