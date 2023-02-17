// import { useUser } from "../../hooks";
// import { User } from "../User";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const UsersList = () => {
//   const { fetchUser, isLoading, users } = useUser();

//   if (isLoading) {
//     return <div> Is Loading!!</div>;
//   }

//   {
//     users.map((user) => <User
//       key={user.id}
//       id={user.id}
//       name={user.name}
//       onUserClick={fetchUser}
//     />)
//   }

  return (
  <Container className="mx-auto p-5">
    <Card className='mx-auto' style={{ width: '18rem' }}>
        <Card.Img src="https://avatars.githubusercontent.com/u/47572048?v=4" />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
            <Button variant="dark">Go to profile</Button>
        </Card.Body>
    </Card>
</Container>
);
};

export default UsersList;
