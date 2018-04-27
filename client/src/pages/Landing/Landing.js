import React from 'react';
import {
    Container,
    Col,
    Navbar,
    NavbarBrand,
    Card,
    CardBody,
    CardTitle,
    CardImage
} from 'mdbreact';
import {Link} from 'react-router-dom';

const Landing = () => (
    <div>
        <Navbar>
            <NavbarBrand href='/home'>
                <img src='/assets/images/ATL_Logotype_Sans.svg' alt='logo' height='30'/>
            </NavbarBrand>
            <a>Logout</a>
        </Navbar>
        <Container>
            <div className='card-deck'>
                <Col md='4'>
                    <Link to='/inventory'>
                        <Card className='mb-4'>
                            <CardImage
                                className="img-fluid"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"/>
                            <CardBody>
                                <CardTitle className='text-center'>Inventory</CardTitle>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
                <Col md='4'>
                    <Link to='/employees'>
                        <Card className='mb-4'>
                            <CardImage
                                className="img-fluid"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"/>
                            <CardBody>
                                <CardTitle className='text-center'>Employees</CardTitle>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
                <Col md='4'>
                    <Link to='/regulars'>
                        <Card className='mb-4'>
                            <CardImage
                                className="img-fluid"
                                src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"/>
                            <CardBody>
                                <CardTitle className='text-center'>Regulars</CardTitle>
                            </CardBody>
                        </Card>
                    </Link>
                </Col>
            </div>
        </Container>
    </div>
);

export default Landing;