import React, {Component} from 'react';
import {
    Container,
    Col,
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavItem,
    NavLink,
    Card,
    CardBody,
    CardTitle,
    CardImage
} from 'mdbreact';
import Modal from '../components/Modal';
import {Button} from 'mdbreact';
import {Link} from 'react-router-dom';
import API from '../utils/API';
import Auth from '../utils/Auth';

class Landing extends Component {
    state = {
        secretData: '',
        user: {}
    }

    /**
       * This method will be executed after initial rendering.
       */
    componentDidMount() {
        API
            .dashboard(Auth.getToken())
            .then(res => {
                this.setState({secretData: res.data.message, user: res.data.user});
            })
        console.log(this.state.secretData + ' ' + this.state.user);
    }

    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

    toggle = () => {
        this
            .child
            .current
            .toggle();
    }

    logout = () => {
        // deauthenticate user
        Auth.deauthenticateUser();
    }

    render() {
        return (
            <div>
                <Modal ref={this.child}>
                    <Link to='/inventory/glassware'>
                        <Button color="primary" onClick={this.toggle}>Glassware</Button>
                    </Link>
                    <Link to='/inventory/silverware'>
                        <Button color="primary" onClick={this.toggle}>Silverware</Button>
                    </Link>
                    <Link to='/inventory/wine'>
                        <Button color="primary" onClick={this.toggle}>Wine</Button>
                    </Link>
                </Modal>
                <Navbar color="#31334a" dark expand="md" scrolling>
                    <NavbarBrand href='/dashboard'>
                        <img src='/assets/images/ATL_Logotype_Sans.svg' alt='logo' height='30'/>
                    </NavbarBrand>
                    <NavbarNav right>
                        <NavItem>
                            <NavLink to='/login' onClick={this.logout}>Logout: {this.state.user.firstName}</NavLink>
                        </NavItem>
                    </NavbarNav>
                </Navbar>
                <Container>
                    <div className='card-deck'>
                        <Col md='4'>
                            <Card className='mb-4' onClick={this.toggle}>
                                <CardImage
                                    className="img-fluid"
                                    src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg"/>
                                <CardBody>
                                    <CardTitle className='text-center'>Inventory</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md='4'>
                            <Link to='/employees' >
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
    };
};

export default Landing;