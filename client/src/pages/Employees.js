import React, {Component} from 'react';
// import {Link,} from 'react-router-dom';
import {
    Container,
    Button,
    Input
} from 'mdbreact';
import { ToastContainer, toast } from 'react-toastify';
import Modal from '../components/Modal';
import API from '../utils/API';
import Auth from '../utils/Auth';
import Jumbotron from '../components/Jumbotron';
import ItemData from '../components/ItemData';
import LocalNav from '../components/LocalNav';


class Employees extends Component {

    child = React.createRef();
    
    state = {
        items: [],
        update: {
            firstName: '',
            lastName: '',
            email: '',
            phone: ''
        },
        user: {}
    }

    componentDidMount() {
        API
            .dashboard(Auth.getToken())
            .then(res => {
                this.setState({user: res.data.user});
            })
        console.log(this.state.user);
        this.loadItems();
    }

    handleChange = event => {
        const field = event.target.name;
        const update = this.state.update;
        update[field] = event.target.value;
        this.setState({update});
        console.log(update);
    }

    handleUpdate = event => {
        event.preventDefault();        
        this.addItem();
        this.loadItems();
        this.toggle();
    }

    addItem = () => {
        const token = Auth.getToken();        
        API.addItem(this.props.type, this.state.update, token).then((res, err) => {
            toast.success(`New Employee added!`, {
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

    logout = () => {
        // deauthenticate user
        Auth.deauthenticateUser();
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
                    <Button color='primary' onClick={this.handleUpdate}>Add</Button>
                </Modal>
                <LocalNav firstName={this.state.user.firstName}/>
                <Container>
                    <Jumbotron>
                        <h1>{this.props.title}</h1>                    
                        <hr className='my-4' />
                        <Button color='primary' onClick={this.toggle}>Add</Button>
                    </Jumbotron>
                    <div className='row justify-content-center' >
                        <ItemData
                        items={this.state.items}
                        type={this.props.type}/>
                    </div>
                </Container>
            </div>
        )
    }
};

export default Employees;