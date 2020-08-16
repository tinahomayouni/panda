import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { filterAddress } from '../../redux/addressFilters/action';
import { Input, Checkbox, Switch, DoubleSelect } from '../UIKit';
import { ButtonGroup, Button } from 'react-bootstrap'
import "./sidebar.scss"



function Sidebar() {
  const { filters: hasFilter } = useSelector(state => state.reducerAddress)
  const [withImageOnly, setWithImageOnly] = useState(false);
  const [fullMortgage, setFullMortgage] = useState(false);

  const [room, setRoom] = useState(undefined);
  const [rent, setRent] = useState({ min: undefined, max: undefined });
  const [mortgage, setMortgage] = useState({ min: undefined, max: undefined });

  const dispatch = useDispatch();

  useEffect(() => {
    setFilters();

  }, [withImageOnly, fullMortgage, room, rent.max, rent.min, mortgage.max, mortgage.min])


  const setFilters = () => {

    console.log({
      budget: {
        mortgage,
        rent
      }
    })
    dispatch(filterAddress({
      withImageOnly,
      fullMortgage,
      room,
      budget: {
        mortgage,
        rent
      }
    }))
  }
  const items = [];
  for (let i = 0; i < 3; i++) {
    items.push(<Button key={i} variant="secondary" value={i}>{i}</Button>)
  }

  return (
    <aside>
      <form>
        <Switch labels={["with pic", 'no']} onChange={setWithImageOnly} />
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
          options={[{ value: "12", label: "12" }]}
          title="mortgage"
          fromTitle="min"
          toTitle="max"
        />

      </form>
    </aside>
  )
}

export default Sidebar;
