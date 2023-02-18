import { MDBInput, MDBCol } from "mdbreact";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const UserSearch = ({onSubmit}) => {
  const [value, setValue] = useState("");

const handleSubmit = e => {
  e.preventDefault();
  if (!value) return;
  setValue("");
  onSubmit(value);
};


return (
  <Form onSubmit={handleSubmit}> 
    <Form.Group className="row">
      <Container className="col-md-8">
      <h1 className="m-4" style={{ fontWeight: 'bold' }}> GET GITHUB PROFILE</h1>
        <MDBCol>
          <MDBInput onChange={(e)=>setValue(e.target.value)} value={value} hint="Github Profile" type="text"/>
          <Button className="col-md-6" variant="success" type="submit">
            Search Github Profile</Button>
        </MDBCol>
      </Container>
    </Form.Group>
  </Form>
  );
};

export default UserSearch;
