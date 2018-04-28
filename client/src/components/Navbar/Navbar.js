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

class FullNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
        this.onClick = this
            .onClick
            .bind(this);
        this.toggle = this
            .toggle
            .bind(this);
    }

    onClick() {
        this.setState({
            collapse: !this.state.collapse
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Router>
                <Navbar color="#31334a" dark expand="md" scrolling>
                    <NavbarBrand href='/home'>
                        <img src='/assets/images/ATL_Logotype_Sans.svg' alt='logo' height='30'/>
                    </NavbarBrand>
                    {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick}/>}
                    <Collapse isOpen={this.state.collapse} navbar>
                        <NavbarNav left>
                            <NavItem active>
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
                    </Collapse>
                </Navbar>
            </Router>
        );
    }
}

export default FullNav;