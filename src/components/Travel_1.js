import React from "react"


const Travel_1 = ({destination, distance, country, landscape}) =>{
  return (
      <p>
        je vais à {destination} qui est à {distance} dans ce beau pays qu'est la {country}.
        <img 
          alt = "photo du pays"
          src = {landscape}>
        </img>
      </p>


  )
}






export default Travel_1