import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOuput/UserOutput';

class App extends Component {

  state = {
    username: "stateUsr"
  }

  userNameChangedHandler = (event) => {
    this.setState({ username: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <UserInput changed={this.userNameChangedHandler} original={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="manu" />
      </div>
    );
  }
}

export default App;
