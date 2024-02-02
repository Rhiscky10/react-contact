import React, { Component, useState } from "react";
import { Button, Modal } from "react-bootstrap";

// class UserItem extends Component {
//   render() {
//     return <h1> User item component</h1>;
//   }
// }

function UserItem(props) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState(props.details.name);
  const [phonenumber, setPhonenumber] = useState(props.details.phonenumber);
  const [locaction, setLocation] = useState(props.details.locaction);

  const handleModalState = () => {
    setShowModal(!showModal);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePhonenumberChange = (e) => {
    setPhonenumber(e.target.value);
  };
  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };
  return (
    <div>
      <h1>{props.details.name}</h1>
      <h2>{props.details.phonenumber}</h2>
      <h3>{props.details.location}</h3>

      <button onClick={handleModalState}>Edit</button>
      <button variant="danger">Delete</button>

      <Modal show={showModal} onHide={handleModalState}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={this.handleSubmit}>
            //{" "}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              // <Form.Label>User Fullname</Form.Label>
              //{" "}
              <Form.Control
                value={this.state.name}
                onChange={this.handleNameChange}
                type="text"
                placeholder="Enter your fullname"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                value={this.state.phonenumber}
                onChange={this.handlephonenumberChange}
                type="numbers"
                placeholder="Enter your phone number"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>User Location</Form.Label>
              <Form.Control
                value={this.state.location}
                onChange={this.handlelocationChange}
                type="text"
                placeholder="Enter your current Location"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalState}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default UserItem;
