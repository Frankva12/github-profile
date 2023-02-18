import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap-css-only/css/bootstrap.min.css';

const UserCard = ({data, isLoading}) => {

    if (!isLoading) {
        return <div> Is Loading!!</div>;
    }
    
  return (
        <Container className="mx-auto p-5">
            <Card className='mx-auto' style={{ width: '18rem' }}>
                <Card.Img  src={data.avatar_url}/>
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                        <Card.Text>
                        {data.bio}
                        </Card.Text>
                    <Button variant="dark" onClick={data.html_url}>Go to profile</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default UserCard;
