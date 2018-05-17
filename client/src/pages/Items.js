import React, {Component} from 'react';
import Modal from '../components/Modal';
import Jumbotron from '../components/Jumbotron';
import {
    Container,
    Button,
    Input
} from 'mdbreact';
import ItemData from '../components/ItemData';
import API from '../utils/API';
import Auth from '../utils/Auth';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

class Items extends Component {

    child = React.createRef();
    
    state = {
        items: [],
        update: {
            item: '',
            total: '',
            par: '',
            distributor: '',
            wine: '',
        },
        radio: 2,
        order: []
    }

    handleChange = event => {
        const field = event.target.name;
        const update = this.state.update;
        update[field] = event.target.value;
        this.setState({update});
        // console.log(update);
    }

    handleUpdate = event => {
        event.preventDefault();
        if (!this.state.update.item) {
            toast.error(`Please choose a ${this.props.type} to update!`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false
            });
        } 
        else if (this.state.update.total && !this.state.update.par && this.state.radio === 2) {
            this.updateTotal();
            this.loadItems();
            this.resetUpdate();
            this.toggle();
        } 
        else if (this.state.update.par && !this.state.update.total && this.state.radio === 2) {
            this.updatePar();
            this.loadItems();
            this.resetUpdate();
            this.toggle();
        } 
        else if (this.state.update.total && this.state.update.par && this.state.radio === 2) {
            // console.log('called all');
            axios.all([this.updateTotal(), this.updatePar()]);
            this.loadItems();
            this.resetUpdate();
            this.toggle();        
        } else if (this.state.radio === 1) {
            this.addItem();
            this.loadItems();
            this.resetUpdate();
            this.toggle();
        }
    }

    updatePar = () => {
        const token = Auth.getToken();
        API.updateItemPar(this.props.api, this.state.update, token).then((res, err) => {
            if (err) throw err;
            toast.success(`The daily par for ${res.data.item} has been updated`, {
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
        API.updateItem(this.props.api, this.state.update, token).then((res, err) => {
            // console.log(res);
            if (err) throw err;
            toast.success(`The total for ${res.data.item} has been updated`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false
            });
            
        });
    }

    addItem = () => {
        const token = Auth.getToken();        
        API.addItem(this.props.api, this.state.update, token).then((res, err) => {
            if (err) throw err;
            toast.success(`New ${this.props.type} added!`, {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false
            });
        })
    }

    componentDidMount() {
        this.loadItems();
    }

    loadItems = () => {
        API
        .getItems(this.props.api, Auth.getToken())
        .then(res => {
            this.setState({items: res.data});
            // console.log(this.state.items);
            this.calculateMissing();
            // console.log(this.state.items);
        });
    };

    calculateMissing = () => {
        let type = this.props.type;
        this.calculateParTurn();
        this.calculateTotalTurn();
        if (type === 'Wine') {
            this.state.items.map((item, i) => {
                let state = this.state.items;
                let missing = item.par - item.total;
                // console.log(missing);
                if (missing < 0) {
                    missing = 0;
                    state[i].missing = missing;
                    this.setState({items: state});
                } else {
                    state[i].missing = missing;
                    this.setState({items: state});
                }
            })
        } else {
            this.state.items.map((item, i) => {
                let state = this.state.items;
                let missing = item.parTurn - item.totalTurn;
                // console.log(missing);
                if (missing < 0) {
                    missing = 0;
                    state[i].missing = missing;
                    this.setState({items: state});
                } else {
                    state[i].missing = missing;
                    this.setState({items: state});
                }
            })

        }
        this.mustOrder();        
    }

    calculateParTurn = () => {
        this.state.items.map((item, i) => {
            let state = this.state.items;
            let turn = Math.round(item.parDay/4.5);
            // console.log(turn);
            state[i].parTurn = turn;
            this.setState({parTurn: state});
        });
    }

    calculateTotalTurn = () => {
        this.state.items.map((item, i) => {
            let state = this.state.items;
            let turn = Math.round(item.totalDay/4.5);
            // console.log(turn);
            state[i].totalTurn = turn;
            this.setState({totalTurn: state});
        });
    }


    mustOrder = () => {
        switch(this.props.type) {
            case 'Glass':
                let mustOrder = this.state.items.filter(item => item.missing >= 24);
                mustOrder.map(item => {
                    let rounded = 24 * Math.round(item.missing/24);
                    // console.log('rounded: ', rounded);
                    let cases = rounded/24;
                    // console.log('cases: ', cases);
                    this.addAlert(`Must order ${cases} cases of ${item.item} glasses!`)
                })
            break;
            case 'Wine':
                this.state.items.map(item => {
                    if (item.missing > 0) {
                        this.addAlert(`Must order ${item.missing} bottles of ${item.item}!`);
                    }
                });
            break;
            default:
            break;
        }
    }
    
    toggle = () => {
        this.child.current.toggle();
    }

    resetUpdate = () => {
        let update = this.state.update;
        update = {
            item: '',
            total: '',
            par: '',
            distributor: '',
            wine: '',
        }
        this.setState({update});
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

    onUpdate = event => {
        toast.dismiss();
        this.handleUpdate(event);
    }

    radioClick1 = () => {
        this.setState({radio: 1});
        // console.log(this.state.radio);
    }

    radioClick2 = () => {
        this.setState({radio: 2});
        // console.log(this.state.radio);
    }


    render() {
        const wine = this.props.type === 'Wine';
        return (
            <Container id='content' >
                <ToastContainer
                    position="top-right"
                    autoClose={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable={false}
                />
                <Modal ref={this.child} title={`Choose ${this.props.type} to Update`}>
                    <form>
                        {wine && 
                            <div>
                                <Input group onClick={this.radioClick1} checked={this.state.radio === 1 ? true : false} label='Add' type='radio' id='radio-add'/>
                                <Input group onClick={this.radioClick2} checked={this.state.radio === 2 ? true : false} label='Update' type='radio' id='radio-update' />
                            </div>
                        }
                        {
                            wine &&  
                            this.state.radio === 1 && 
                                <div>
                                    <Input group label='Wine' className='col-md-5' name='item' onChange={this.handleChange}/>
                                    <Input group label='Distributor' className='col-md-5' name='distributor' onChange={this.handleChange}/>
                                </div>
                            
                        }
                        {this.state.radio === 2 && <select name='item' value={this.state.update.value} onChange={this.handleChange}>
                            <option defaultValue>{`Choose ${this.props.type}...`}</option>
                            {this.state.items.map((item, key) => {
                                return <option value={item.item} key={key}>{item.item}</option>
                            })}
                        </select>}
                        <Input group label='New Total' className='col-md-5' name='total' onChange={this.handleChange}/>
                        {this.state.radio === 2 && <Input group label='New Par' className='col-md-5' name='par' onChange={this.handleChange} />}
                        {wine ?  <Button color='primary' onClick={this.onUpdate}> Update or Add </Button> : <Button color='primary' onClick={this.onUpdate}>Update</Button>}
                    </form>                   
                </Modal>
                <Jumbotron>
                    <h1>{this.props.title}</h1>                    
                    <hr className='my-4' />
                    {wine ?  <Button color='primary' onClick={this.toggle}> Update or Add </Button> : <Button color='primary' onClick={this.toggle}>Update</Button>}
                </Jumbotron>
                <div className='row justify-content-center' >
                    <ItemData
                    items={this.state.items}
                    type={this.props.type}
                    distributor={wine ? true : false}/>
                </div>
            </Container>
        );
    }
};

export default Items;