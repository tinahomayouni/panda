import React from 'react';
import { Col } from 'react-bootstrap';
import data from '../../data/dataCard/dataCard.json';

function Sidebar() {
  let uniquFilter = [];
  data.houses.forEach(house => {
    house.option.forEach(opt => {
      const key = Object.keys(opt)[0];
      if (!uniquFilter.includes(key)) {
        uniquFilter.push(key);
      }
    });
  });
  function selector() {
    alert('changed!!');
  }

  return (
    <Col xs={4}>
      <aside>
        <select onChange={selector}>
          <option>Choose!</option>
          {uniquFilter.map((opt, index) => {
            return <option key={index}>{opt}</option>;
          })}
        </select>
      </aside>
    </Col>
  );
}

export default Sidebar; 