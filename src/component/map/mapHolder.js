import React from 'react'
import { Map, TileLayer } from "react-leaflet";
import "./map.scss"
function MapHolder() {

  return (
    <div className="ownMap">
      <Map center={[45.4, -75.7]} zoom={16}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
      </Map>
    </div>
  )
}

export default MapHolder
