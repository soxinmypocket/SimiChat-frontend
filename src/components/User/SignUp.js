import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


class SignUp extends React.Component {
  state = {
    username: "",
    avatar: "",
    bio: "",
    password: ""
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    // TODO: make a fetch request to sign up the current user
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(r => r.json())
      // then set that user in state in our App component
      .then(newUser => {
        this.props.handleLogin(newUser)

      }
    )
  }

  render() {
    const { username, avatar, bio, password } = this.state

    return (
      <>
      {/* <Form>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form> */}
     
       <form onSubmit={this.handleSubmit}>
         <h1>Sign up</h1>

         <label>Username</label>
          <input
        type="text"
      name="username"
          autoComplete="off"
          value={username}
          onChange={this.handleChange}
        />

         <label>Profile Image</label>
         <input 
           type="text"
          name="avatar"
          autoComplete="off"
          value={avatar}
          onChange={this.handleChange}
        />
        <img src={avatar.length ? avatar : "https://cdn.iconscout.com/icon/free/png-512/account-profile-avatar-man-circle-round-user-30452.png"} alt={username} />

        <label>Bio</label>
         <textarea 
         name="bio"
          value={bio}
          onChange={this.handleChange}
        />

        <label>Password</label>
         <input 
           type="password"
          name="password"
          autoComplete="current-password"
          value={password}
          onChange={this.handleChange}
        />

        <input type="submit" value="Signup" />
     </form> 
       </>
    )
  }
}

export default SignUp