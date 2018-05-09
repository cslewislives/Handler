import React, {Component} from 'react';
// import {Link,} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import DataTable from '../components/DataTable';
import {
    Col,
    Container,
    Button,
    Card,
    CardBody,
    CardTitle,
    CardText,
    Table
} from 'mdbreact';

class Employees extends Component {

    render() {

        return (
            <Container>
                <Card className='mb-12'>
                    <CardBody>
                        <CardTitle className='text-center'>Employees</CardTitle>
                        <CardText>
                            <h2 className='text-center'>NEED:
                            </h2>
                        </CardText>
                        <Button>Add</Button>
                        <Button>Change Par</Button>
                    </CardBody>
                </Card>
                <Col md='6'>
                    <DataTable />
                </Col>
            </Container>
        )
    }
};

export default Employees;