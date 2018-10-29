import React, { Component } from 'react';
import './App.css';

import UserList from './Components/UserList/UserList';
import Form from './Components/UserForm/Form';
class App extends Component {
  render() {
    return (
      <div>
          <UserList/>
          <Form />
      </div>
    );
  }
}

export default App;
