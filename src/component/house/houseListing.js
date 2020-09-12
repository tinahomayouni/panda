import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import HouseItem from './houseItem'
import { Row, Col } from 'react-bootstrap';



function HouseListing() {
  const { filters: filterFromReducer } = useSelector(state => state.housesReducer);
  const { filteredHouses } = useSelector(state => state.housesReducer);



  // useEffect(() => {
  //   console.log(filterFromReducer, 'filterFromReducerimage');
  //   if (filterFromReducer && filterFromReducer.room) {
  //     const withRoom = data.houses.filter(house => {
  //       const naturalOptions = house.option.reduce((total, opt) => {
  //         Object.keys(opt).forEach(key => total[key] = opt[key])
  //         return total;
  //       }, {})
  //       if (naturalOptions.room == filterFromReducer.room) {
  //         return house
  //       }
  //     })
  //     setFilteredData(withRoom);
  //   } else {
  //     setFilteredData(data.houses);
  //   }
  // }, [filterFromReducer.room]);



  // useEffect(() => {
  //   if (filterFromReducer && filterFromReducer.fullMortgage) {//when afteresh undefined shod ba khodesh and mikonim
  //     const fullMortgageHouses = data.houses.filter(house => {
  //       console.log(house, "house")
  //       return house.fullMortgage === filterFromReducer.fullMortgage
  //     })
  //     setFilteredData(fullMortgageHouses);
  //   } else {
  //     setFilteredData(data.houses);
  //   }

  // }, [filterFromReducer.fullMortgage])

  // useEffect(() => {
  //   if (filterFromReducer && filterFromReducer.budget) {
  //     const budgetHouse = data.houses.filter(house => {
  //       return house.budget == filterFromReducer.budget
  //     })
  //     setFilteredData(budgetHouse)
  //   }

  // }, [filterFromReducer.budget])



  return (
    <div className="cardHolder">
      <Row>
        {filteredHouses.map(house => {
          return (
            <Col xs={4}>
              <HouseItem house={house} />
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default HouseListing
