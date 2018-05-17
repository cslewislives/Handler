import React, {Component} from 'react';
// import {Link, Route} from 'react-router-dom';
// import Glassware from './Glassware';
// import Silverware from './Silverware';
// import Wine from './Wine';
import { PrivateRoute } from '../components/Routes';
import API from '../utils/API';
import Auth from '../utils/Auth';
import Items from './Items';
import LocalNav from '../components/LocalNav';

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
        // console.log(this.state.user);
    }

    render() {
        return (
            <div>
                <LocalNav firstName={this.state.user.firstName}/>

                <PrivateRoute exact path={`${this.props.match.url}/glassware`} component={Items} api='glass' type='Glass' title='Glassware'/>
                <PrivateRoute exact path={`${this.props.match.url}/silverware`} component={Items} api='silver' type='Silver' title='Silverware'/>
                <PrivateRoute exact path={`${this.props.match.url}/wine`} component={Items} api='wine' type='Wine' title='Wine'/>
            </div>
        )
    }
}

export default Inventory;