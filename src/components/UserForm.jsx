import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";

// class UserForm extends React.Component {
//   constructor() {
//     super();
//     this.state = { name: "", phonenumber: "", location: "" };
//   }

//   handleNameChange = (e) => {
//     this.setState({ name: e.target.value });
//   };

//   handlephonenumberChange = (e) => {
//     this.setState({ phonenumber: e.target.value });
//   };

//   handlelocationChange = (e) => {
//     this.setState({ location: e.target.value });
//   };
//   handleSubmit = (e) => {
//     e.preventDefault();

// };
//   render() {
//     return (
//       <Container>
//         <Form onSubmit={this.handleSubmit}>
//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>User Fullname</Form.Label>
//             <Form.Control
//               value={this.state.name}
//               onChange={this.handleNameChange}
//               type="text"
//               placeholder="Enter your fullname"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicPassword">
//             <Form.Label>Phone Number</Form.Label>
//             <Form.Control
//               value={this.state.phonenumber}
//               onChange={this.handlephonenumberChange}
//               type="numbers"
//               placeholder="Enter your phone number"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3" controlId="formBasicEmail">
//             <Form.Label>User Location</Form.Label>
//             <Form.Control
//               value={this.state.location}
//               onChange={this.handlelocationChange}
//               type="text"
//               placeholder="Enter your current Location"
//             />
//           </Form.Group>

//           <Button variant="primary" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </Container>
//     );
//   }
// }

function UserForm(props) {
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [location, setLocation] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePhonenumberChange = (e) => {
    setPhonenumber(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (this.state.name.length > 0 && this.state.phonenumber.length > 0) {
      let newUser = {
        name: name,
        phonenumber: phonenumber,
        location: location,
        id: uuid(),
      };

      props.addUser(newUser);
      setName("");
      setPhonenumber("");
      setLocation("");
    }
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Fullname</Form.Label>
          <Form.Control
            value={name}
            onChange={handleNameChange}
            type="text"
            placeholder="Enter your fullname"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            value={phonenumber}
            onChange={handlePhonenumberChange}
            type="numbers"
            placeholder="Enter your phone number"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Location</Form.Label>
          <Form.Control
            value={location}
            onChange={handleLocationChange}
            type="text"
            placeholder="Enter your current Location"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default UserForm;
