import React, {Component} from 'react';
import {
    Col,
    Container,
    Button,
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavItem,
    NavLink,
    Input
} from 'mdbreact';
import { ToastContainer, toast } from 'react-toastify';
import Modal from '../components/Modal';
import API from '../utils/API';
import Auth from '../utils/Auth';
import Jumbotron from '../components/Jumbotron';
import ItemData from '../components/ItemData';


class Employees extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
        
        this.state = {
            items: [],
            update: {
                firstName: '',
                lastName: '',
                email: '',
                phone: ''
            }
        }
        this.handleChange = this.handleChange.bind(this);

        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleChange(event) {
        const field = event.target.name;
        const update = this.state.update;
        update[field] = event.target.value;
        this.setState({update});
        console.log(update);
    }

    handleUpdate(event) {
        event.preventDefault();        
        this.addItem();
        this.loadItems();
        this.toggle();
    }

    addItem = () => {
        const token = Auth.getToken();        
        API.addItem(this.props.type, this.state.update, token).then((res, err) => {
            toast.success(`New Regular added!`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false
            });
            this.loadItems();
        })
    }

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        API
        .getItems(this.props.type, Auth.getToken())
        .then(res => {
            console.log(res);
            this.setState({items: res.data});
            console.log(this.state.items);
        });
    };

    toggle = () => {
        this.child.current.toggle();
    }

    render() {

        return (
            <div>
                <ToastContainer
                    position="top-center"
                    autoClose={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable={false}
                />
                <Modal ref={this.child} title={`Add ${this.props.title}`}>
                    <form>
                        <Input
                        label="First Name"
                        group
                        type="text"
                        validate
                        name="firstName"
                        onChange={this.handleChange}/>
                        <Input
                        label="Last Name"
                        name="lastName"
                        group
                        type="text"
                        validate
                        onChange={this.handleChange}/>
                        <Input
                        label="Email"
                        name="email"
                        group
                        type="text"
                        validate
                        onChange={this.handleChange}/>
                        <Input
                        label="Phone"
                        name="phone"
                        group
                        type="number"
                        validate
                        onChange={this.handleChange}/>
                    </form>
                    <Button onClick={this.handleUpdate}>Add</Button>
                </Modal>
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
                <Jumbotron>
                    <h1>{this.props.title}</h1>                    
                    <hr className='my-4' />
                    <Button onClick={this.toggle}>Add</Button>
                </Jumbotron>
                <Col md='8'>
                    <ItemData
                    items={this.state.items}
                    type={this.props.type}/>
                </Col>
                </Container>
            </div>
        )
    }
};

export default Employees;