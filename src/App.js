import React, {Component} from 'react';
import './App.css';
import {Button} from 'semantic-ui-react';

const githubUserURL = githubUsername =>
  `https://api.github.com/users/${githubUsername}`

  class App extends Component {
  state = {
    user: {},
    active: false
  }

  handleToggle = (event) =>{
    if (this.state.active===false){
      fetch(githubUserURL('jdhaagenson'))
        .then(response => response.json())
        .then(responseBody => {
          console.log(responseBody);
          this.setState({user: responseBody, active:true})
        });
    } else {
      this.setState({active: false})
    }

  };

render() {
  return (
    <React.Fragment>
      <Button onClick={this.handleToggle}>Toggle User</Button>
      {this.state.active && (
        <React.Fragment>
          <img src={this.state.user.avatar_url} alt="user profile"></img>
          <h1>{this.state.user.name}</h1>
          <p>Location: {this.state.location}</p>
          <p>Bio: {this.state.user.bio}</p>
        </React.Fragment>
      )}
    </React.Fragment>
  );

}

}

export default App;
