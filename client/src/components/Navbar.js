import React, {Component} from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavbarToggler,
    Collapse,
    NavItem,
    NavLink
} from 'mdbreact';
import {BrowserRouter as Router} from 'react-router-dom';

const FullNav = props => (

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
                <a>Logout</a>
            </NavItem>
        </NavbarNav>
    </Navbar>

)

export default FullNav;