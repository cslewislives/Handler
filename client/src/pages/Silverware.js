import React, {Component} from 'react';
// import {Link,} from 'react-router-dom';
import {Col, Container, Button, Card, CardBody, CardTitle, CardText} from 'mdbreact';

class Silverware extends Component {

    render() {

        return (
            <Container>
                <Card className='mb-12'>
                    <CardBody>
                        <CardTitle className='text-center'>Silverware</CardTitle>
                        <CardText>
                            <h2 className='text-center'>NEED:
                            </h2>
                        </CardText>
                        <Button>Add</Button>
                        <Button>Change Par</Button>
                    </CardBody>
                </Card>
                <Col md='6'>
                </Col>
            </Container>
        )
    }
};

export default Silverware;