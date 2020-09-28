import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Center from '../components/Center';
import ViewCenterModal from '../components/ViewCenterModal';
import CenterSort from '../components/CenterSort';
import OrderContainer from '../containers/OrderContainer';


class CenterContainer extends Component {
  state = {
    selectedCategory: "BROOKLYN",
    centers: [],
  }
  

  // event handlers
  // setSelectedCategory = newCategory => {
  //   this.setState({
  //     selectedCategory: newCategory,
  //     currentIndex: 0
  //   })
  // }


  getFilteredCenters() {
    return this.props.centers
    .filter(center =>
      // filter by category
      this.state.selectedCategory === "All" || center.category === this.state.selectedCategory
    )
    }

    //Open Modal
  
  
    

    render() {
      return (
        <>
        
          {/* <CenterSort
            selectedCategory={this.state.selectedCategory}
            onCategoryChange={this.setSelectedCategory}
          /> */}
          

        <div className="menu">
          <OrderContainer />

          <div id="burger-menu">
            {
              this.props.centers.map(center => <Center key={center.id} center={center} slug={center.slug}/>)
            }
            

          </div>
        </div>
        
        </>
      );
    }
  
}


export default CenterContainer;


