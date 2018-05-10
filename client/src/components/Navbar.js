import React, {Component} from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavItem,
    NavLink,
} from 'mdbreact';
import Auth from '../utils/Auth';

class FullNav extends Component {

    logout = () => {
        // deauthenticate user
        Auth.deauthenticateUser();
    }

    render() {
        return (
            <Navbar color="#31334a" dark expand="md" scrolling>
                <NavbarBrand href='/dashboard'>
                    <img src='/assets/images/ATL_Logotype_Sans.svg' alt='logo' height='30'/>
                </NavbarBrand>
                <NavbarNav left>
                    <NavItem>
                        <NavLink to="/inventory/glassware">Glassware</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/inventory/silverware">Silverware</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/inventory/wine">Wine</NavLink>
                    </NavItem>
                </NavbarNav>
                <NavbarNav right>
                    <NavItem>
                        <NavLink to='/login' onClick={this.logout}>Logout</NavLink>
                    </NavItem>
                </NavbarNav>
            </Navbar>
        )
    }

}

export default FullNav;