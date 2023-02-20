import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import 'bootstrap-css-only/css/bootstrap.min.css';
import githubLogo from '../../assets/github.png'

const UserCard = ({data, isLoading}) => {

    if (!isLoading) {
        return (
        <Container className="mx-auto p-5 col">
        <Card className='mx-auto' style={{ width: '18rem' }}>
            <Card.Img  src={githubLogo}/>
                <Card.Body>
                    <Card.Title>Github Request</Card.Title>
                        <Card.Text>
                        Please put some profile and submit your data
                        </Card.Text>
                    <Button variant="dark" disabled={true} onClick={data.html_url}>Please put some profile</Button>
                </Card.Body>
            </Card>
        </Container>)
    }
    
  return (
        <Container className="mx-auto p-5 col">
            <Card className='mx-auto' style={{ width: '18rem' }}>
                <Card.Img  src={data.avatar_url}/>
                <Card.Body>
                    <Card.Title>{data.name}</Card.Title>
                        <Card.Text style={{ fontWeight: 'bold' }}>
                        {data.location}
                        </Card.Text>
                        <Card.Text>
                        {data.bio}
                        </Card.Text>
                    <Button variant="dark" href={data.html_url}>Go to profile</Button>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default UserCard;
