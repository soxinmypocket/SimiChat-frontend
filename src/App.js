import React from 'react';
import './App.css';
import {Switch, Route, withRouter, Redirect} from 'react-router-dom'

import NavBar from './components/NavBar'
import Home from './components/Home'

// Center Components 
import CenterContainer from './containers/CenterContainer'
import ViewCenterModal from './components/ViewCenterModal'

// Chat Components 
import ChatContainer from './components/ChatContainer'

// User Components
import SignUp from './components/User/SignUp'
import Login from './components/User/Login'
import Profile from './components/User/Profile'

// const OPEN_DATA_API_KEY = process.env.REACT_APP_API_KEY

class App extends React.Component {
  state = {
    currentUser: {},
    centers: []
  }
  

//Get centers from NYC Open Access API
componentDidMount(){
  fetch(`${process.env.REACT_APP_API_URL}$limit=4&$$app_token=${process.env.REACT_APP_API_KEY}`)  
  .then(r => r.json())
  .then(centers => {
    this.setState({
    centers: centers
    })
  })
}

//User Login

updateUser = newUser => {
  this.setState({ currentUser: newUser })
}

handleLogin = currentUser => {
  // set current user, then redirect to home page
  this.setState({ currentUser }, () => {
    this.props.history.push('/profile')
    console.log(this.state.currentUser.username)
    
  })
}

// handleLogout = () => {
//   // remove the userId from localstorage
//   localStorage.removeItem("token")
//   // and clear the user in state
//   this.setState({
//     currentUser: null
//   })
// }

render(){
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
          <SignUp handleLogin={this.handleLogin} />
        </Route>
      

        <Route path="/centers" render={routerProps => 
          <CenterContainer {...routerProps} centers={this.state.centers}/>} />
        <Route path="/viewcenter/" component={ViewCenterModal}/>
        <Route path="/chat" component={ChatContainer} />

        <Route path="/signup">
          <SignUp handleLogin={this.handleLogin} />
        </Route>

        <Route path="/login">
          <Login handleLogin={this.handleLogin} />
        </Route>

        <Route path="/profile">
          {this.state.currentUser ? <Profile currentUser={this.state.currentUser} updateUser={this.updateUser} /> : <Redirect to='/' />}
        </Route>
          
        </Switch>
      </div>
    )
  }

}


export default withRouter(App);
