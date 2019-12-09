import React from "react";
import { axiosWithAuth } from "../axiosWithAuth";
import Friend from "./Friend"
import AddFriendForm from "./AddFriendForm";


class FriendsList extends React.Component {
  state = {
    friends: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get("/friends")
      .then(res => {
          console.log(res)
        this.setState({
          friends: res.data
        });
      })
      .catch(err => console.log(err));
  };

  

  render() {
    return (
        <div>
            <AddFriendForm />
            {this.state.friends.map((friend)=> (
                <Friend key={friend.id} friend={friend} />
        ))}
        </div>
   
    );
  }
}

export default FriendsList;