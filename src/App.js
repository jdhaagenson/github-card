import React, {Component} from 'react';
import './App.css';
import {Button, Card, Icon} from 'semantic-ui-react';

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
    <Card>
      <Button onClick={this.handleToggle}>Toggle User</Button>
      {this.state.active && (
        <Card>
          <img src={this.state.user.avatar_url} alt="user profile"></img>
          <Card.Content>
            <Card.Header>{this.state.user.name}</Card.Header>
              <p>{this.state.user.location}</p>
            <Card.Meta>
              <span className='date'>Member since {this.state.user.created_at}</span>
            </Card.Meta>
            <Card.Description>
              <p>{this.state.user.bio}</p>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a href={this.state.user.followers_url}>
              <Icon name='user'/>
              {this.state.user.followers}
            </a>
          </Card.Content>
        </Card>
      )}
    </Card>
  );

}

}

export default App;
