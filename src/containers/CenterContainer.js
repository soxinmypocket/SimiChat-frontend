import React, { Component } from 'react';
import Center from '../components/Center';
import CenterSort from '../components/CenterSort';
// import Pager from '../components/Pager'
// import Geolocation from '../components/Geolocation';



class CenterContainer extends Component {

  render() {
   
  return (
  <> 
  <br></br>
  <CenterSort 
   
  /> 
  <br></br>
  <div className="infinite"> 
    <div >
      <div >
        {
          this.props.centers.map(center => <Center key={center.id} center={center} slug={center.slug}/>)
        }
      </div>
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

