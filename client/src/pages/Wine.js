import React, {Component} from 'react';
// import {Link,} from 'react-router-dom';
import {
    Container,
    Col,
    Button,
    Card,
    CardBody,
    CardTitle
} from 'mdbreact';

class Wine extends Component {

    render() {

        return (
            <Container>
                <Card className='mb-12'>
                    <CardBody>
                        <CardTitle className='text-center'>Wine</CardTitle>
                        <Button>Add</Button>
                    </CardBody>
                </Card>
                <Col md='6'>
                </Col>
            </Container>
        )
    }
};

export default Wine;