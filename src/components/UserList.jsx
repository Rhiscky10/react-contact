import React, { Component } from "react";
import UserItem from "./UserItem";

// class UserList extends Component {
//   render() {
//     return;
//     <h1> User list component</h1>;
//   }
// }

function UserList(props) {
  console.log(props.users.length);
  return (
    <div>
      <h1>User List component</h1>
      {props.users.map((user) => {
        return <UserItem details={user} />;
      })}
    </div>
  );
}

export default UserList;
