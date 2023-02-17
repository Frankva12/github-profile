import { MDBInput, MDBCol } from "mdbreact";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useUser } from "../../hooks";

const UserSearch = () => {
  const { fetchUser } = useUser();

  // if (isLoading) {
  //   return <div> Is Loading!!</div>;
  // }

//   {
//     users.map((user) => <User
//       key={user.id}
//       id={user.id}
//       name={user.name}
//       onUserClick={fetchUser}
//     />)
//   }

const [value, setValue] = useState("");
const handleSubmit = e => {
  e.preventDefault();
  if (!value) return;
  setValue("");
};


return (
  <Form onSubmit={handleSubmit}> 
    <Form.Group className="row">
      <Container className="col-md-8">
      <h1 className="m-4" style={{ fontWeight: 'bold' }}> GET GITHUB PROFILE</h1>
        <MDBCol>
          <MDBInput hint="Github Profile" type="text"/>
          <Button className="col-md-6" variant="success" type="submit" onClick={fetchUser}>
            Search Github Profile</Button>
        </MDBCol>
      </Container>
    </Form.Group>
  </Form>
  );
};

export default UserSearch;
