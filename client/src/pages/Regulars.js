import React, {Component} from 'react';
// import {Link,} from 'react-router-dom';
import {
    Col,
    Container,
    Button,
    Card,
    CardBody,
    CardTitle,
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavItem,
    NavLink
} from 'mdbreact';
import GlassData from '../components/GlassData';

class Regulars extends Component {

    render(props) {

        return (
            <div>
                <Navbar color="#31334a" dark expand="md" scrolling>
                    <NavbarBrand href='/dashboard'>
                        <img src='/assets/images/ATL_Logotype_Sans.svg' alt='logo' height='30'/>
                    </NavbarBrand>
                    <NavbarNav right>
                        <NavItem>
                            <NavLink to='/login' onClick={this.logout}>Logout</NavLink>
                        </NavItem>
                    </NavbarNav>
                </Navbar>
                <Container>
                    <Card className='mb-12'>
                        <CardBody>
                            <CardTitle className='text-center'>Regulars</CardTitle>
                            <Button>Add</Button>
                        </CardBody>
                    </Card>
                    <Col md='6'>
                        <GlassData/>
                    </Col>
                </Container>
            </div>
        )
    }
};

export default Regulars;