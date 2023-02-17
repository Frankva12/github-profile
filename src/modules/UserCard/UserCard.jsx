import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { useUser } from '../../hooks';

const UsersList = () => {
  const { users } = useUser();

    const imgURL = users.avatar_url;
  return (
        <Container className="mx-auto p-5">
            <Card className='mx-auto' style={{ width: '18rem' }}>
                <Card.Img src={imgURL} />
                <Card.Body>
                    <Card.Title>{users.name}</Card.Title>
                        <Card.Text>
                        {users.bio}
                        </Card.Text>
                    <Button variant="dark" onClick={users.html_url}>Go to profile</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default UsersList;
