import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { filterAddress } from '../../redux/addressFilters/action';
import { Input, Checkbox, Switch, SelectBox, Option } from '../UIKit';
import { ButtonGroup, Button } from 'react-bootstrap'
import { Col } from 'react-bootstrap';
import "./sidebar.scss"



function Sidebar() {
  const { filters: hasFilter } = useSelector(state => state.reducerAddress)

  const [withImageOnly, setWithImageOnly] = useState(false)
  const [fullMortgage, setFullMortgage] = useState(false)
  const [minMortgate, setMinMortgate] = useState(undefined)
  const [room, setRoom] = useState(undefined)


  console.log(hasFilter, 'hasImages');

  const dispatch = useDispatch()
  useEffect(() => {
    if (!!hasFilter) {
      dispatch(filterAddress({ fullMortgage, room, minMortgate }))
      console.log({ fullMortgage }, 'full')
      console.log(room, 'room')

      console.log(hasFilter, 'hasFilter')
    }
  }, [fullMortgage, room, minMortgate])

  const items = []
  for (let i = 0; i < 3; i++) {
    items.push(<Button key={i} variant="secondary" value={i}>{i}</Button>)
  }

  console.log(minMortgate)
  return (
    <Col xs={4}>
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
          <SelectBox onChange={setMinMortgate}>
            <Option value="alpha">alpha</Option>
            <Option value="beta">abeta</Option>
          </SelectBox>
        </form>
      </aside>
    </Col>

  )
}

export default Sidebar;
