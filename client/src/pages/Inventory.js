import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Glassware from './Glassware';
import Silverware from './Silverware';
import Wine from './Wine';

const Inventory = props => (

    <div>
        <Navbar/>

        <Route exact path={`${props.match.url}/glassware`} component={Glassware}/>
        <Route exact path={`${props.match.url}/silverware`} component={Silverware}/>
        <Route exact path={`${props.match.url}/wine`} component={Wine}/>
    </div>
)

export default Inventory;