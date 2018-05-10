import React from 'react';
// import {Link, Route} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Glassware from './Glassware';
import Silverware from './Silverware';
import Wine from './Wine';
import { PrivateRoute } from '../components/Routes';

const Inventory = props => (

    <div>
        <Navbar/>

        <PrivateRoute exact path={`${props.match.url}/glassware`} component={Glassware}/>
        <PrivateRoute exact path={`${props.match.url}/silverware`} component={Silverware}/>
        <PrivateRoute exact path={`${props.match.url}/wine`} component={Wine}/>
    </div>
)

export default Inventory;