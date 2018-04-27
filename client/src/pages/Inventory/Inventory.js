import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Modal from '../../components/Modal';
import {Container, Button} from 'mdbreact';

class Inventory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this
            .toggle
            .bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentDidMount() {
        this.toggle();
    }

    render(props) {
        return (
            <div>
                <Navbar/>
                <Container>
                    <Modal>
                        <Link to='/inventory/glassware'>
                            <Button color="primary" onClick={this.toggle}>Glassware</Button>
                        </Link>
                        <Link to='/inventory/silverware'>
                            <Button color="primary" onClick={this.toggle}>Silverware</Button>
                        </Link>
                        <Link to='/inventory/wine'>
                            <Button color="primary" onClick={this.toggle}>Wine</Button>
                        </Link>
                    </Modal>
                </Container>
            </div>
        )
    }
};

export default Inventory;