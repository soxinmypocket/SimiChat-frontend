import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


const Center = (props) => {
  
  let {center} = props
 

  return (
    <div className="burger">
      <h3 className="burger_title">{center.name_1} </h3>
      <h4>{center.street_1},{center.city},{center.zip}</h4>
      <Link to={"/viewcenter/"}>View Center</Link>
    </div>

  )
}

export default Center;