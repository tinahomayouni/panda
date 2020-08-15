import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { Col } from 'react-bootstrap';
import data from '../../data/dataCard/dataCard.json';
import { filterHouses } from "../../redux/houseFilter/action"
import "./sidebar.scss"

function Sidebar() {
  const [options, setOptions] = useState('');
  const [room, setRoom] = useState("");
  const [categories, setCategories] = useState('');
  const dispatch = useDispatch();

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

  useEffect(() => {
    dispatch(filterHouses({ room, categories }));
  })
  // we don't use function because fuction instance state when created first time but useEffect have updated state


  return (
    <Col xs={4}>
      <aside>
        <form>
          <label for="room">Room:</label>
          <input id="room" placeholder="room" onChange={(e) => setRoom(e.target.value)} />

          <label>Category:</label>
          <select onChange={(e) => setCategories(e.target.value)}>
            <option value="">Choose!</option>
            {category.map((categoryItem, index) => {
              return <option>{categoryItem}</option>
            })}
          </select>

        </form>
      </aside>
    </Col>
  );
}

export default Sidebar; 