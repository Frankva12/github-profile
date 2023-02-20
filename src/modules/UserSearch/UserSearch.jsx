import { MDBInput, MDBCol } from "mdbreact";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserSearch = ({onSubmit}) => {
  const [value, setValue] = useState("");

const handleSubmit = e => {
  e.preventDefault();
  if (!value){
    alert("Write a valid github profile")
  } else {
    setValue("");
    onSubmit(value);
  }
};


return (
  <Form className="text-center row-md-6" onSubmit={handleSubmit}> 
    <Form.Group className="col">
      <Container className="col-md-8">
      <h1 className="mt-3 text-white" style={{ fontWeight: 'bold' }}> GET GITHUB PROFILE</h1>
        <MDBCol>
          <MDBInput style={{ fontWeight: 'bold' }} className="mt-5" onChange={(e)=>setValue(e.target.value)} value={value} hint="Github Profile" type="text"/>
          <Button className="col-md-4 mt-3 text-dark" style={{ fontWeight: 'bold' }} variant="success" type="submit">
            Search Github Profile</Button>
        </MDBCol>
      </Container>
    </Form.Group>
  </Form>
  );
};

export default UserSearch;
