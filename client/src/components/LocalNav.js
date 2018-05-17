import React, {Component} from 'react';
import {
    Navbar,
    NavbarBrand,
    NavbarNav,
    NavbarToggler,
    Collapse,
    NavItem,
    NavLink,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'mdbreact';
import Auth from '../utils/Auth';

class LocalNav extends Component {

    state = {
        collapse: false,
        isWideEnough: false,
        dropdownOpen: false
    }

    logout = () => {
        // deauthenticate user
        Auth.deauthenticateUser();
    }

    renderNavItems = () => {
        // console.log(window.location.pathname);
        switch (window.location.pathname) {
            case '/dashboard':
                ''
            break;
            default:
            return (
                <NavbarNav left>
                    <NavItem>
                        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                            <DropdownToggle nav caret>Inventory</DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem href="/inventory/glassware">Glassware</DropdownItem>
                                <DropdownItem href="/inventory/silverware">Silverware</DropdownItem>
                                <DropdownItem href="/inventory/wine">Wine</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/employees">Employees</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/regulars">Regulars</NavLink>
                    </NavItem>
                </NavbarNav>
            );
        }
    }
    onClick = () => {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Navbar color="#31334a" dark expand="md" scrolling>
                <NavbarBrand href='/dashboard'>
                    <img src='/assets/images/ATL_Logotype_Sans.svg' alt='logo' height='30'/>
                </NavbarBrand>
                {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick}/>}
                <Collapse isOpen={this.state.collapse} navbar>
                    {this.renderNavItems()};
                    <NavbarNav right>
                        <NavItem>
                            <NavLink to='/login' onClick={this.logout}>Logout: {this.props.firstName}</NavLink>
                        </NavItem>
                    </NavbarNav>
                </Collapse>
            </Navbar>
        )
    }

}

export default LocalNav;