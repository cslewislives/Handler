import React from 'react';
import {Container, Modal, ModalBody, ModalHeader} from 'mdbreact';

class ModalPage extends React.Component {
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

    render(props) {
        return (
            <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
                <ModalHeader toggle={this.toggle}>Choose an Inventory</ModalHeader>
                <ModalBody>
                    {props.children}
                </ModalBody>
            </Modal>
        );
    }
}

export default ModalPage;
