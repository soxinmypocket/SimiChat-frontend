import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBIcon
} from 'mdbreact';
import '..';

class Home extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    const { collapsed } = this.state;
    this.setState({
      collapsed: !collapsed
    });
  };

  componentDidMount() {
    document.querySelector('nav').style.height = '65px';
  }

  componentWillUnmount() {
    document.querySelector('nav').style.height = 'auto';
  }

  render() {
    const { collapsed } = this.state;
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id='caltoaction'>
        <Router>
          <div>
           
            {collapsed && overlay}
          </div>
        </Router>
        <MDBView src='https://mdbootstrap.com/img/Photos/Others/gradient2.png'>
          <MDBMask className='rgba-purple-slight ' />
          <MDBContainer
            style={{ height: '100%', width: '100%', paddingTop: '14rem' }}
            className='d-flex justify-content-center align-items-center'
          >
            <MDBRow>
              <MDBCol md='12' className='mb-4 text-center'>
              <div className="homecontainer">
                <h1 className='display-4 font-weight-bold mb-0 pt-md-5 pt-5'>
                  Welcome to SimiChat!
                </h1>
                
                <h5 className='pt-md-5 pt-sm-2 pt-5 pb-md-5 pb-sm-3 pb-5'>
                An emotional support tool that addresses many of today's mental health challenges including 
                generalized anxiety and depression to specific conditions like sadness and sleep deprevation.</h5>
                
                <MDBBtn rounded className='btn-purple'>
                  <MDBIcon icon='user' className='mr-2' /> Sign up
                </MDBBtn>
                <MDBBtn outline color='blue' rounded>
                  <MDBIcon icon='book' className='mr-2' /> Sign in
                </MDBBtn>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </MDBView>
      </div>
    );
  }
}

export default Home;
   