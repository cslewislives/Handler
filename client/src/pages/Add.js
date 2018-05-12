import React, {Component} from 'react';
import {Input, Container, Button} from 'mdbreact';
import API from '../utils/API';
import Auth from '../utils/Auth';
import { ToastContainer, toast } from 'react-toastify';

class Add extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            item: '',
            total: '',
            par: ''
        }

        this.handleChange = this.handleChange.bind(this);

        this.addGlass = this.addGlass.bind(this);
        this.addSilver = this.addSilver.bind(this);
    }

    handleChange(event) {
        const field = event.target.name;
        const state = this.state;
        state[field] = event.target.value;
        this.setState({state});
        console.log(state);
    }

    addItem = (route, type) => {
        const token = Auth.getToken();        
        API.addItem(route, this.state, token).then((res, err) => {
            toast.success(`New ${type} added!`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false
            });
        })
    }

    addGlass(event) {
        event.preventDefault();
        this.addItem('glass', 'Glass');
    }

    addSilver(event) {
        event.preventDefault();
        this.addItem('silver', 'Silver');
    }

    render() {
        return(
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
                <form>
                    <Input group label='Item' className='col-md-5' name='item' onChange={this.handleChange}/>
                    <Input group label='Total' className='col-md-5' name='total' onChange={this.handleChange}/>
                    <Input group label='Par' className='col-md-5' name='par' onChange={this.handleChange}/>
                    <Button onClick={this.addGlass}> Add Glass </Button>
                    <Button onClick={this.addSilver}> Add Silver </Button>
                </form>
            </Container>
        )
    }

}

export default Add;