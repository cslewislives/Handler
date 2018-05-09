import React, {Component} from 'react';
import {Modal, ModalBody, ModalHeader} from 'mdbreact';

class ModalPage extends Component {
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

    

    render() {
        return (
            <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
                <ModalHeader toggle={this.toggle}>Choose</ModalHeader>
                <ModalBody>
                    {this.props.children}
                </ModalBody>
            </Modal>
        );
    }
}

export default ModalPage;
