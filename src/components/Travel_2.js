import React from "react"


const Travel_2 = ({destination, distance, country, landscape}) =>{
  return (
    <p>
      Un jour j'irai à {destination}. Je ne connais pas, mais apparemment c'est {distance}. Ca tombe bien, je viens d'obtenir le visa pour le {country}. 
        <img  
          alt = "photo du pays"
          src = {landscape}
          >
        </img>
    </p>
)
}
    







export default Travel_2