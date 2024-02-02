import React, { useState } from "react";
import UserList from "./components/UserList";
import UserForm from "./components/UserForm";
import { Container, Row, Col } from "react-bootstrap";
import { v4 as uuid } from "uuid";

function App() {
  const [users, setUsers] = useState([
    { name: "Tori", phonenumber: "0202244332", location: "Madina" },
    { name: "Rhiscky", phonenumber: "0202244332", location: "Madina" },
    { name: "Kofi", phonenumber: "0202244332", location: "Madina" },
    { name: "King", phonenumber: "0202244332", location: "Madina" },
  ]);

  const addNewUser = (newUser) => {
    setUsers([...users, newUser]);
  };

  console.log(users);

  return (
    <Container>
      <Row>
        <Col>
          <UserForm addUser={addNewUser} />
        </Col>

        <Col>
          <UserList />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
