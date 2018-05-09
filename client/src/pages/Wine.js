import React, {Component} from 'react';
// import {Link,} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import DataTable from '../components/DataTable';
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
                        <CardTitle className='text-center'>Glassware</CardTitle>
                        <Button>Add</Button>
                    </CardBody>
                </Card>
                <Col md='6'>
                    <DataTable/>
                </Col>
            </Container>
        )
    }
};

export default Wine;