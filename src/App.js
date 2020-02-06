import React, {Component} from 'react';
import './App.css';

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
    <>
      <button onClick={this.handleToggle}>Toggle User</button>
      {this.state.active && (
        <>
          <img src=this.state.user.avatar_url alt="user profile"></img>
          <h1>{this.state.user.name}</h1>
          <p>Bio: {this.state.user.bio}</p>
          <p>Followers: {this.state.user.followers}</p>
        </>
      )}
    </>
  );

}

}

export default App;
