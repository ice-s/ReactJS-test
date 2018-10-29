import React, { Component } from 'react';


class User extends Component {
	constructor(props){
		super(props);
		this.state = {
			level : 1,
			status : true
		}
	}

	renderRole(level){
		if(level === 1){
			return  'admin';
		}

		return 'user';
	}

	editEvent = () => {
		alert("edit");
	};

	hiddenEvent = () => {
		alert("hidden");
	};

	deleteEvent = () => {
		alert("delete");
	};

    render() {
	    return (
	      <div className="item">
	      		<div className="info">
		        	<span className={`username ${this.renderRole(this.state.level)}`}>Username</span>
	    	    	<span className="email">Email</span>
	      		</div>
	      		<div className="action">
	      			<button className="edit" onClick={() => this.editEvent()}>Edit</button>
	      			<button className="hidden" onClick={() => this.hiddenEvent()}>Hidden</button>
	      			<button className="delete" onClick={() => this.deleteEvent()}>Delete</button>
	      		</div>
	      </div>
	    );
  	}
}

export default User;
