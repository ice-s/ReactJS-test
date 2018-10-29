import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <div className="form-user">
      		<form>
            <span><b>Username</b></span>
            <input name="username" className="input" type="text"/>
            <span><b>Email</b></span>
            <input name="email" className="input" type="email"/>

            <button className="save">Save</button>
          </form>
      </div>
    );
  }
}

export default Form;
