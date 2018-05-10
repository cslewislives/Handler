import React, {Component} from 'react';
// import {Link,} from 'react-router-dom';
import Modal from '../components/Modal';
import Jumbotron from '../components/Jumbotron';
import {
    Col,
    Container,
    Button,
    Input,
    FormInline
} from 'mdbreact';
import GlassData from '../components/GlassData';
import API from '../utils/API';
import Auth from '../utils/Auth';
import { ToastContainer, toast, Flip } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

class Glassware extends Component {

    constructor(props) {
        super(props);
        this.child = React.createRef();
        
        this.state = {
            glasses: [],
            update: {
                glass: 'Choose Glass..',
                total: ''
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
        if (this.state.update.glass === 'Choose Glass...') {
            alert('Please choose a glass to update');
        } else {
            const token = Auth.getToken();
            console.log(token);
            API.updateGlass(this.state.update, token).then((res, err) => {
                toast.success(`The total for ${res.data.glass} has been updated`, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: false,
                        draggable: false
                    });
                this.loadGlass();
                this.toggle();
            });
        }
    }

    componentDidMount() {
        this.loadGlass();
    }

    loadGlass() {
        API
        .getGlass(Auth.getToken())
        .then(res => {
            this.setState({glasses: res.data});
            console.log(this.state.glasses);
            this.calculateMissing();
            console.log(this.state.glasses);
        });
    };

    calculateMissing() {
        this.state.glasses.map((glass, i) => {
            let state = this.state.glasses;
            let missing = glass.par - glass.total;
            console.log(missing);
            if (missing < 0) {
                missing = 0;
                state[i].missing = missing;
                this.setState({glasses: state});
            } else {
                state[i].missing = missing;
                this.setState({glasses: state});
            }
        })
        this.mustOrder();        
    }

    mustOrder() {
        let mustOrder = this.state.glasses.filter(glass => glass.missing >= 24);
        mustOrder.map(glass => {
            let rounded = 24 * Math.round(glass.missing/24);
            console.log('rounded: ', rounded);
            let cases = rounded/24;
            console.log('cases: ', cases);
            this.addAlert(`Must order ${cases} cases of ${glass.glass} glasses!`)
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

    onUpdate(event) {
        toast.dismiss();
        this.handleUpdate(event);
    }


    render() {

        return (
            <Container>
                <ToastContainer
                    transition={Flip}
                    position="top-right"
                    autoClose={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable={false}
                />
                <Modal ref={this.child} title='Choose Glass to Update'>
                    <FormInline>
                        <select name='glass' value={this.state.update.value} onChange={this.handleChange}>
                            <option defaultValue>Choose Glass...</option>
                            <option value='Wine'>Wine</option>
                            <option value='Water'>Water</option>
                            <option value='Rocks'>Rocks</option>
                            <option value='Coups'>Coups</option>
                            <option value='Port'>Port</option>
                            <option value='Mugs'>Mugs</option>
                        </select>
                        <Input label='New Total' className='col-md-5' name='total' onChange={this.handleChange}/>
                        <Button onClick={this.onUpdate}>Update</Button>
                    </FormInline>                   
                </Modal>
                <Jumbotron>
                    <h1>Glassware</h1>                    
                    <hr className='my-4' />
                    <Button onClick={this.toggle}>Update</Button>
                    <Button>Change Par</Button>
                </Jumbotron>
                <Col md='6'>
                    <GlassData
                        glasses={this.state.glasses}/>
                </Col>
            </Container>
        )
    }
};

export default Glassware;