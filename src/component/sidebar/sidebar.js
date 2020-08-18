import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { filterAddress } from '../../redux/housesReducer/action';
import { Checkbox, Switch, DoubleSelect } from '../UIKit';
import { ButtonGroup, Button } from 'react-bootstrap'
import "./sidebar.scss"



function Sidebar() {
  const { filters: hasFilter } = useSelector(state => state.housesReducer)
  const [image, setImage] = useState(false);
  const [fullMortgage, setFullMortgage] = useState(false);

  const [room, setRoom] = useState(undefined);
  const [rent, setRent] = useState({ min: undefined, max: undefined });
  const [mortgage, setMortgage] = useState({ min: undefined, max: undefined });

  const dispatch = useDispatch();
  console.log(hasFilter, 'hasFilter')
  useEffect(() => {
    dispatch(filterAddress({
      image,
      fullMortgage,
      room,
      budget: {
        mortgage,
        rent
      }
    }))

  }, [image, fullMortgage, room, rent.max, rent.min, mortgage.max, mortgage.min])



  const items = [];

  for (let i = 0; i < 3; i++) {
    items.push(<Button key={i} variant="secondary" value={i}>{i}</Button>)
  }


  const handleChangeDoubleSelectMortgage = (value) => {

    setMortgage(value);
  }
  const handleChangeDoubleSelectRent = (value) => {

    setRent(value);
  }
  return (
    <aside>
      <form>
        <Switch labels={["with pic", 'no']} onChange={setImage} />
        <Checkbox
          className="beta"
          label="Full Mortgage"
          onChange={setFullMortgage}
        />
        <ButtonGroup aria-label="Basic example" onClick={(e) => setRoom(e.target.value)}>
          <Button variant="secondary" value="undefined">مهم نیست</Button>
          {items}
        </ButtonGroup>

        <DoubleSelect
          options={[{ value: "12", label: "12" }, { value: "24", label: "24" }]}
          onChange={handleChangeDoubleSelectMortgage}
          value={mortgage}
          title="mortgage"
          fromTitle="min"
          toTitle="max"
        />
        <DoubleSelect
          options={[{ value: "12", label: "12" }, { value: "24", label: "24" }]}
          onChange={handleChangeDoubleSelectRent}
          value={rent}
          title="rent"
          fromTitle="min"
          toTitle="max"
        />
      </form>
    </aside>
  )
}

export default Sidebar;
