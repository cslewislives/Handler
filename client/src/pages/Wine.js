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
import WineData from '../components/WineData';
import axios from 'axios';

class Wine extends Component {

    constructor(props) {
        super(props);
        this.child = React.createRef();
        
        this.state = {
            wine: [],
            update: {
                wine: 'Choose wine..',
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
        if (this.state.update.wine === 'Choose wine...') {
            alert('Please choose a glass to update');
        } 
        else if (this.state.update.total && !this.state.update.par) {
            this.updateTotal();
            this.loadWine();
            this.toggle();
        } 
        else if (this.state.update.par && !this.state.update.total) {
            this.updatePar();
            this.loadWine();
            this.toggle();
        } 
        else if (this.state.update.total && this.state.update.par) {
            axios.all([this.updateTotal(), this.updatePar()]);
            this.loadWine();
            this.toggle();           
        }
    }

    onUpdate(event) {
        toast.dismiss();
        this.handleUpdate(event);
    }

    updatePar = () => {
        const token = Auth.getToken();
        API.updateWinePar(this.state.update, token).then((res, err) => {
            toast.success(`The par for ${res.data.Wine} has been updated`, {
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
        API.updateWine(this.state.update, token).then((res, err) => {
            toast.success(`The total for ${res.data.wine} has been updated`, {
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
        this.loadWine();
    }

    loadWine = () => {
        API
        .getWine(Auth.getToken())
        .then(res => {
            this.setState({wine: res.data});
            this.calculateMissing();
        });
    };

    calculateMissing = () => {
        this.state.wine.map((item, i) => {
            let state = this.state.wine;
            let missing = item.par - item.total;
            console.log(missing);
            if (missing < 0) {
                missing = 0;
                state[i].missing = missing;
                this.setState({wine: state});
            } else {
                state[i].missing = missing;
                this.setState({wine: state});
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
                <Modal ref={this.child} title='Choose Wine to Update'>
                    <FormInline>
                        <select name='wine' value={this.state.update.value} onChange={this.handleChange}>
                            <option defaultValue>Choose wine...</option>
                            {this.state.wine.map((item, key) => {
                                return <option value={item.wine} key={key}>{item.wine}</option>
                            })}
                        </select>
                        <Input label='New Total' className='col-md-5' name='total' onChange={this.handleChange}/>
                        <Input label='New Par' className='col-md-5' name='par' onChange={this.handleChange}/>
                        <Button onClick={this.onUpdate}>Update</Button>
                    </FormInline>                   
                </Modal>
                <Jumbotron>
                    <h1>Wine</h1>                    
                    <hr className='my-4' />
                    <Button onClick={this.toggle}>Update</Button>
                </Jumbotron>
                <Col md='6'>
                    <WineData
                        wine={this.state.wine}/>
                </Col>
            </Container>
        )
    }
};

export default Wine;