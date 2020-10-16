import React, { Component } from 'react';
import Center from '../components/Center';
import CenterSort from '../components/CenterSort';
import Pagnation from '../components/Pagnation';
// import Pager from '../components/Pager'
// import Geolocation from '../components/Geolocation';



class CenterContainer extends Component {

  render() {
   
  return (
  <> 
  <br></br>
  <div className="centercontainer">
    <CenterSort />
    <div>
        {
          this.props.centers.map(center => <Center key={center.id} center={center} slug={center.slug}/>)
        }
      </div>
      <div className="pagnation">
      <Pagnation />
      </div>
    </div>
  
  {/* <Geolocation center={this.props.centers} /> */}
  {/* {
    this.props.centers.map(location => <Geolocation  key={location.id} center={location} slug={location.slug}/>)
  } */}
  </>
  )} 
}
export default CenterContainer;

