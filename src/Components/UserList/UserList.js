import React, { Component } from 'react';

import User from '../User/User';

class UserList extends Component {

	constructor(props){
		super(props);
		this.state = {
			level : 1,
			status : true,
			users : [
				{id : 1, username : 'user1', email : 'test1@gmail.com'},
				{id : 2, username : 'user2', email : 'test2@gmail.com'},
				{id : 3, username : 'user3', email : 'test3@gmail.com'}
			]
		}
	}

	getListUser(){
		var users = [
			{id : 6, username : 'user6', email : 'test1@gmail.com'},
			{id : 7, username : 'user7', email : 'test2@gmail.com'},
			{id : 8, username : 'user8', email : 'test3@gmail.com'},
			{id : 9, username : 'user9', email : 'test4@gmail.com'},
			{id : 10, username : 'user10', email : 'test5@gmail.com'},
		];

		this.setState({users: users});	
	}


	renderList() {
		var _data = this.state.users;
		// return(
		//     _data.map(function(user, i){
		//        return <User name="name" key={i}/>
		//     })
		// );

		return _data.map((user, index) => (
		    <User name="name" key={user.id}/>
		));
	}

	loadmoreEvent = () => {
		this.getListUser();
	};

    render() {
	    return (
	        <div className="user-list">
	        	{this.renderList()}

	        	<button className="delete" onClick={() => this.loadmoreEvent()}>LoadMore</button>
	        </div>
	    );
  	}
}

export default UserList;
