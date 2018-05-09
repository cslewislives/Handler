import React, {Component} from 'react';
// import {Link,} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import {Col, Container, Button, Card, CardBody, CardTitle, CardText} from 'mdbreact';
import GlassData from '../components/GlassData';

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
                    <GlassData />
                </Col>
            </Container>
        )
    }
};

export default Silverware;