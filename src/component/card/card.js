import React from 'react'
import CardItem from './cardItem'
import data from "../../data/dataCard/dataCard.json";

function card() {
  return (
    <div className="cardHolder">


      <CardItem products={data.products} />

    </div>
  )
}

export default card
