import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown'


export default class CenterSort extends Component {
  render() {
    // const {handleSelectedCity, cities} = this.props
    return (
      <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        Select Borough
      </Dropdown.Toggle>
    
      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Brooklyn</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Bronx</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Manhattan</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Queens</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Staten Island</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    );
  }
}

// export default class CenterSort extends Component {
//   render() {
//     const {handleSelectedCity, cities} = this.props
//     return (
//       <div>
//           <select onChange={(e) => handleSelectedCity(e.target.value)}>
//               <option value="all">All</option>
//               {
//                 cities.map(city => <option key={city} value={city}>{city}</option>)
//               }
//           </select>
//       </div>
//     );
//   }
// }


// class CenterSort extends React.Component {

//   render() {
//     console.log(this.props)
//     return (
//       <div className="center-sort">
//         <button
//           className={this.props.selectedCategory === "All" ? "active" : ""}
//           onClick={() => this.props.onCategoryChange("All")}
//         >All</button>
//         <button className={this.props.city === "BROOKLYN" ? "active" : ""} onClick={() => this.props.onCategoryChange("BROOKLYN")} >Brooklyn</button>
//         <button className={this.props.city === "QUEENS" ? "active" : ""} onClick={() => this.props.onCategoryChange("QUEENS")} >Queens</button>
//         <button className={this.props.city === "BRONX" ? "active" : ""} onClick={() => this.props.onCategoryChange("BRONX")} >Bronx</button>
//         <button className={this.props.city === "NEW YORK" ? "active" : ""} onClick={() => this.props.onCategoryChange("NEW YORK")} >Manhattan</button>
//         <button className={this.props.city === "STATEN ISLAND" ? "active" : ""} onClick={() => this.props.onCategoryChange("STATEN ISLAND")} >Staten Island</button>
//       </div>
//     )
//   }
// }

// export default CenterSort