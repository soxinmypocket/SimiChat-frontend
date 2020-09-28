import React from 'react';
import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'

import NavBar from './components/NavBar'
import Form from './components/Form'
import ProfileContainer from './containers/CenterContainer'
import CenterContainer from './containers/CenterContainer';
import ChatContainer from './components/ChatContainer'
import Home from './components/Home'
import Stats from './components/Stats'
import Aces from './components/Aces'
import Forum from './components/Forum'
import ViewCenterModal from './components/ViewCenterModal'


//Sort and Search feature
// import CenterSearch from './components/CenterSearch'


class App extends React.Component {
  state = {

    user: {
      id: 0,
      email: "",
      reviews: []
    },
    token: "",
    centers: [],
    selectedCities: "all",
    cities: [] , 
  }

//Get users from backend
  componentDidMount(){

    if (localStorage.token) {

      fetch("http://localhost:3000/persist", {
        headers: {
          "Authorization": `bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then(this.handleResponse)
    }
      // fetch("http://localhost:3000/centers")
      //   .then(r => r.json())
      //   .then(centers => {
        
      //     this.setState({
      //       centers: centers
      //     })
      //   })
      fetch("https://data.cityofnewyork.us/resource/8nqg-ia7v.json?$$app_token=l1yMg5SEKlk0cdvngt8hGXBiQ")
        .then(r => r.json())
        .then(centers => {
        
          this.setState({
            centers: centers
          })
        })
  }
// Render Centers



//Form for login and register
  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }

//Register submit- creating a new profile
  handleRegisterSubmit = (userInfo) => {
    console.log("Register form has been submitted")

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(this.handleResponse)
  }


//Login submit 
handleLoginSubmit = (userInfo) => {
  console.log("Login form has been submitted")

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(userInfo)
  })
    .then(r => r.json())
    .then(this.handleResponse)
}



//Render profile 
renderProfile = (routerProps) => {

  if (this.state.token) {
    return <ProfileContainer
  //     burgers={this.state.burgers}
       user={this.state.user} email={this.state.email}
  //     token={this.state.token}
  //     addNewOrder={this.addNewOrder}
     />
  } else {
    return <Redirect to="/login"/>
  }
}



//logout
handleLogout = () => {
  this.setState({
    user: {
      id: 0,
      email: "",
      reviews: []
    },
    token: ""
  })
  localStorage.clear()
}

//
handleResponse = (resp) => {
  if (!resp.message) {
    localStorage.token = resp.token
    this.setState({
      user: resp.user,
      token: resp.token
    }
    // , () => {
    //   this.props.history.push("/reviews")
    // }
    )
  }
  else {
    alert(resp.message)
  }
}


//CENTER SORT
handleSelectedCity = (selectedCity) => {
  this.setState({
    selectedCity
  })
}

handleSort = (centers) => {
  if(this.state.selectedCity === "all"){
    return centers
  }
  else{
    return centers.filter(center => center.city === this.state.selectedCity)
  }
}

handleCities = () => {
  const cities = []
  this.state.centers.forEach(center => {
    if(!cities.includes(center.city)){
      cities.push(center.city)
    }
  })

  this.setState({
    cities
  })
}




//Open Modal
renderModal = (routerProps) => {

    if(routerProps.location.pathname === "/centers/props.name_1"){
      return <ViewCenterModal centers={this.state.centers}/>
  }
}

 
  render(){
    return (
      <div className="App">
        <NavBar/>
        {this.state.token && <button onClick={this.handleLogout}>Log out</button>}
        <Switch>
          {/* <Route path="/centers" render={this.renderCenters}/> */}
          <Route path="/centers" render={routerProps => 
              <CenterContainer {...routerProps} centers={this.handleSort(this.state.centers)}/>} />

          <Route path="/viewcenter/" component={ViewCenterModal} >
            <ViewCenterModal center={this.state.centers}/> 
          </Route>
          {/* <Route path="/viewcenter/" component /> */}
          <Route path="/chat" component={ChatContainer} />
          <Route path="/stats" component={Stats} />
          <Route path="/chat" component={Aces} />
          <Route path="/chat" component={Forum} />
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm }/>
          <Route path="/profile" render={ this.renderProfile } />
          <Route path="/" exact component={Home}  />
        </Switch>
      </div>
    )
  }

}


export default App;
