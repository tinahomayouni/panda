import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { filterAddress } from '../../redux/addressFilters/action';
import { Input, Checkbox, Switch } from '../UIKit';
import { ButtonGroup, Button } from 'react-bootstrap'
import { Col } from 'react-bootstrap';
import "./sidebar.scss"



function Sidebar() {
  const { filters: hasFilter } = useSelector(state => state.reducerAddress)

  const [withImageOnly, setWithImageOnly] = useState(false)
  const [fullMortgage, setFullMortgage] = useState(false)
  const [room, setroom] = useState(undefined)


  console.log(hasFilter, 'hasImages');

  const dispatch = useDispatch()
  useEffect(() => {
    if (!!hasFilter) {
      dispatch(filterAddress({ fullMortgage, room }))
      console.log({ fullMortgage }, 'full')
      console.log({ fullMortgage }, 'room')
    }
  }, [fullMortgage, room])

  const items = []
  for (let i = 0; i < 3; i++) {
    items.push(<Button key={i} variant="secondary" value={i}>{i + 1}</Button>)
  }

  console.log(withImageOnly)
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
          <ButtonGroup aria-label="Basic example" onClick={(e) => console.log(e.target.value)}>
            <Button variant="secondary" value="undefined">مهم نیست</Button>
            {items}
          </ButtonGroup>
        </form>
      </aside>
    </Col>

  )
}

export default Sidebar;
