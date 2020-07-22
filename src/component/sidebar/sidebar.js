import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import data from '../../data/dataCard/dataCard.json';
import "./sidebar.scss"

function Sidebar() {
  const [options, setOptions] = useState('')


  let uniquFilter = [];
  let category = [];
  data.houses.forEach(house => {
    house.option.forEach(opt => {
      const key = Object.keys(opt)[0];
      if (!uniquFilter.includes(key)) {
        uniquFilter.push(key);
      }
      if (!category.includes(house.category)) {
        category.push(house.category)
      }
    });

  });

  function doFilter() {
    console.log(options)

  }
  return (
    <Col xs={4}>
      <aside>
        <label>Option:</label>
        <select id="options" onChange={(e) => setOptions(e.target.value)}>
          <option>Choose!</option>
          {uniquFilter.map((opt, index) => {
            return <option key={index}>{opt}</option>;
          })}
        </select>

        <label>Category:</label>
        <select>
          <option>Choose!</option>
          {category.map(gt => {
            return <option>{gt}</option>
          })}
        </select>

        <button onClick={doFilter}>Filter</button>
      </aside>
    </Col>
  );
}

export default Sidebar; 