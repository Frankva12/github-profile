// import { useUser } from "../../hooks";
// import { User } from "../User";import React from "react";
import { MDBInput, MDBCol } from "mdbreact";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const UserSearch = () => {
  // const { fetchUser, isLoading, users } = useUser();

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

return (
  <div class="row">
    <Container className="col-md-8">
      <MDBCol>
        <MDBInput hint="Github Profile" type="text"/>
        <Button className="col-md-6" variant="success">Search Github Profile</Button>
      </MDBCol>
    </Container>
  </div>
  );
};

export default UserSearch;
