import React, {Component} from 'react';
// import {Link, Route} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Glassware from './Glassware';
import Silverware from './Silverware';
import Wine from './Wine';
import { PrivateRoute } from '../components/Routes';
import API from '../utils/API';
import Auth from '../utils/Auth';

class Inventory extends Component {

    state = {
        user: {}
    }

    componentDidMount() {
        API
            .dashboard(Auth.getToken())
            .then(res => {
                this.setState({user: res.data.user});
            })
        console.log(this.state.user);
    }

    render() {
        return (
            <div>
                <Navbar firstName={this.state.user.firstName}/>

                <PrivateRoute exact path={`${this.props.match.url}/glassware`} component={Glassware}/>
                <PrivateRoute exact path={`${this.props.match.url}/silverware`} component={Silverware}/>
                <PrivateRoute exact path={`${this.props.match.url}/wine`} component={Wine}/>
            </div>
        )
    }
}

export default Inventory;