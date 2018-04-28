import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Modal from '../../components/Modal';
import {Button} from 'mdbreact';
import Glassware from '../Glassware';

class Inventory extends Component {

    

    render() {

        return (
            <div>
                <Navbar/>
                    
                <Route exact path='/inventory/glassware' component={Glassware}/>
            </div>
        )
    }
};

export default Inventory;