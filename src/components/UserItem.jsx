import React, { Component } from "react";

// class UserItem extends Component {
//   render() {
//     return <h1> User item component</h1>;
//   }
// }

function UserItem(props) {
  return (
    <div>
      <h1>{props.details.name}</h1>
      <h2>{props.details.phonenumber}</h2>
      <h3>{props.details.location}</h3>
    </div>
  );
}

export default UserItem;
