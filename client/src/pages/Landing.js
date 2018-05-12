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
    CardImage,
    Button
} from 'mdbreact';
import Modal from '../components/Modal';
import {Link} from 'react-router-dom';
import API from '../utils/API';
import Auth from '../utils/Auth';

class Landing extends Component {
    
    constructor(props) {
        super(props);
        this.child = React.createRef();
        this.state = {
            secretData: '',
            user: {}
        }
    }
    

    /**
       * This method will be executed after initial rendering.
       */
    componentWillMount() {
        API
            .dashboard(Auth.getToken())
            .then(res => {
                this.setState({secretData: res.data.message, user: res.data.user});
            })
        console.log(this.state.secretData + ' ' + this.state.user);
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
                <Modal ref={this.child} title='Choose Inventory'>
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
                            <Card className='mb-4 landing-img' onClick={this.toggle}>
                                <CardImage
                                    className="img-fluid dash-img"
                                    src="/assets/images/wine.jpg"/>
                                <CardBody>
                                    <CardTitle className='text-center' style={{ color: 'tomato', cursor: 'pointer' }}>Inventory</CardTitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col md='4'>
                            <Link to='/employees' style={{ color: 'tomato' }}>
                                <Card className='mb-4 landing-img'>
                                    <CardImage
                                        className="img-fluid dash-img"
                                        src="/assets/images/employees.jpg"/>
                                    <CardBody>
                                        <CardTitle className='text-center'>Employees</CardTitle>
                                    </CardBody>
                                </Card>
                            </Link>
                        </Col>
                        <Col md='4'>
                            <Link to='/regulars' style={{ color: 'tomato' }}>
                                <Card className='mb-4 landing-img'>
                                    <CardImage
                                        className="img-fluid dash-img"
                                        src="/assets/images/regulars.jpg"/>
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