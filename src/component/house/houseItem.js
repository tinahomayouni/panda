import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVectorSquare, faBath, faBed } from '@fortawesome/free-solid-svg-icons'

function HouseItem(props) {
  return (
    // {props.product.id}
    <div className="cartItem">
      <div className="imgWrp">
        <img src={`/imgs/${props.house.image}`} alt={props.house.alt} />
        <span className="price">{props.house.price}</span>
        <span className={`${!!props.house.featured ? "featured" : "noFeatured"}`}>{props.house.featured}</span>
      </div>
      <div className="txtWrp">
        <h3>{props.house.title}</h3>
        <h4>{props.house.category}</h4>
        <div className="options">
          <div>
            <FontAwesomeIcon icon={faVectorSquare} /><span>{props.house.area}</span>
          </div>
          <div className="rightOption">
            <FontAwesomeIcon icon={faBath} />
            <span className="bathQuantity">
              {props.house.option.map(data => {
                return (
                  data.shower
                )
              })}
            </span>
            <FontAwesomeIcon icon={faBed} />
            <span className="roomQuantity">
              {props.house.option.map(data => {
                return (
                  data.room
                )
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HouseItem
