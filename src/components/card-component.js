import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import vacency1 from "../assets/images/vacency1.png";
import "./component.css"
import { Col } from 'react-bootstrap';

const CardComponent = () => {

    return (<>
        <Col sm={12} md={6} lg={4}>
            <Card className='cardcomponent' style={{}} >

                <Card.Img className='card-img' variant="top" src={vacency1} />
                <Card.Body className='outercomponent'>
                    <Card.Text className='innercomponent'>
                        Published Date
                        <br />
                        Interview Date
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </>)
}

export default CardComponent;