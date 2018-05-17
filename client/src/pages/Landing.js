import React, {Component} from 'react';
import {
    Container,
    Col,
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
import LocalNav from '../components/LocalNav';
import Column from '../components/Column';

class Landing extends Component {

    child = React.createRef();
    state = {
        secretData: '',
        user: {}
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
        // console.log(this.state.secretData + ' ' + this.state.user);
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
                    <div className='row justify-content-center' >
                        <Link to='/inventory/glassware'>
                            <Col>
                                <Button color="primary" onClick={this.toggle}>Glassware</Button>
                            </Col>
                        </Link>
                        <Link to='/inventory/silverware'>
                            <Col>
                                <Button color="primary" onClick={this.toggle}>Silverware</Button>
                            </Col>
                        </Link>
                        <Link to='/inventory/wine'>
                            <Col>
                                <Button color="primary" onClick={this.toggle}>Wine</Button>
                            </Col>
                        </Link>
                    </div>
                </Modal>
                <LocalNav firstName={this.state.user.firstName}/>
                <Container id='dash-btn'>
                    <div className='row' >
                        <Column size='md-4'>
                            <Card className='mb-4 landing-img' onClick={this.toggle}>
                                <CardImage
                                    className="img-fluid dash-img"
                                    src="/assets/images/wine.jpg"/>
                                <CardBody>
                                    <CardTitle className='text-center' style={{ color: 'tomato', cursor: 'pointer' }}>Inventory</CardTitle>
                                </CardBody>
                            </Card>
                        </Column>
                        <Column size='md-4'>
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
                        </Column>
                        <Column size='md-4'>
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
                        </Column>
                    </div>
                </Container>
            </div>
        );
    };
};

export default Landing;