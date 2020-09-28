import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'



const ViewCenterModal = (center) => {
  console.log(center)
  return (
    <div>
      <h1>
        {center.name_1}
      </h1>
    </div>

  )
}

export default ViewCenterModal;