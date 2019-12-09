import React from "react";
import axios from "axios";
import { axiosWithAuth } from "../axiosWithAuth";

class AddFriendForm extends React.Component {
  state = {
    friend: {
      name: "",
      age: "",
      email: ""
    }
  };

  handleChange = e => {
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  addFriend = e => {
    e.preventDefault();
    axiosWithAuth()
      .post("/friends", this.state.friend)
      .then(res => {
        console.log(res);
      })
      .catch(err =>
        console.log(err.message)
      );
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addFriend}>
          <input
            type="text"
            name="name"
            value={this.state.friend.name}
            onChange={this.handleChange}
            placeholder="Name"
          />
          <input
            type="text"
            name="age"
            value={this.state.friend.age}
            onChange={this.handleChange}
            placeholder="Age"
          />
          <input
            type="text"
            name="email"
            value={this.state.friend.email}
            onChange={this.handleChange}
            placeholder="Email"
          />
          <button>Add Friend</button>
        </form>
      </div>
    );
  }
}

export default AddFriendForm;