import React, {Component} from 'react';
import Modal from '../components/Modal';
import Jumbotron from '../components/Jumbotron';
import {
    Col,
    Container,
    Button,
    Input,
    FormInline
} from 'mdbreact';
import API from '../utils/API';
import Auth from '../utils/Auth';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import SilverData from '../components/SilverData';
import axios from 'axios';

class Silverware extends Component {

    constructor(props) {
        super(props);
        this.child = React.createRef();
        
        this.state = {
            silver: [],
            update: {
                silver: 'Choose Silver..',
                total: '',
                par: ''
            },
            order: []
        }
        this.handleChange = this.handleChange.bind(this);

        this.handleUpdate = this.handleUpdate.bind(this);

        this.onUpdate = this.onUpdate.bind(this);
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
        if (this.state.update.silver === 'Choose Silver...') {
            alert('Please choose a glass to update');
        } 
        else if (this.state.update.total && !this.state.update.par) {
            this.updateTotal();
            this.loadSilver();
            this.toggle();
        } 
        else if (this.state.update.par && !this.state.update.total) {
            this.updatePar();
            this.loadSilver();
            this.toggle();
        } 
        else if (this.state.update.total && this.state.update.par) {
            axios.all([this.updateTotal(), this.updatePar()]);
            this.loadSilver();
            this.toggle();           
        }
    }

    onUpdate(event) {
        toast.dismiss();
        this.handleUpdate(event);
    }

    updatePar = () => {
        const token = Auth.getToken();
        API.updateSilverPar(this.state.update, token).then((res, err) => {
            toast.success(`The par for ${res.data.silver} has been updated`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false
            });
        });
    }

    updateTotal = () => {
        const token = Auth.getToken();
        API.updateSilver(this.state.update, token).then((res, err) => {
            toast.success(`The total for ${res.data.silver} has been updated`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false
            });
            
        });
    }

    componentDidMount() {
        this.loadSilver();
    }

    loadSilver = () => {
        API
        .getSilver(Auth.getToken())
        .then(res => {
            this.setState({silver: res.data});
            this.calculateMissing();
        });
    };

    calculateMissing = () => {
        this.state.silver.map((item, i) => {
            let state = this.state.silver;
            let missing = item.par - item.total;
            console.log(missing);
            if (missing < 0) {
                missing = 0;
                state[i].missing = missing;
                this.setState({silver: state});
            } else {
                state[i].missing = missing;
                this.setState({silver: state});
            }
        })      
    }
    
    toggle = () => {
        this.child.current.toggle();
    }

    addAlert = message => {
        toast.error(message, {
            position: "top-right",
            autoClose: false,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false
        });
    }

    render() {

        return (
            <Container>
                <ToastContainer
                    position="top-right"
                    autoClose={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable={false}
                />
                <Modal ref={this.child} title='Choose Silver to Update'>
                    <FormInline>
                        <select name='silver' value={this.state.update.value} onChange={this.handleChange}>
                            <option defaultValue>Choose Silver...</option>
                            {this.state.silver.map((item, key) => {
                                return <option value={item.silver} key={key}>{item.silver}</option>
                            })}
                        </select>
                        <Input label='New Total' className='col-md-5' name='total' onChange={this.handleChange}/>
                        <Input label='New Par' className='col-md-5' name='par' onChange={this.handleChange}/>
                        <Button onClick={this.onUpdate}>Update</Button>
                    </FormInline>                   
                </Modal>
                <Jumbotron>
                    <h1>Silverware</h1>                    
                    <hr className='my-4' />
                    <Button onClick={this.toggle}>Update</Button>
                </Jumbotron>
                <Col md='6'>
                    <SilverData
                        silver={this.state.silver}/>
                </Col>
            </Container>
        )
    }
};

export default Silverware;