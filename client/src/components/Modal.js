import React, {Component} from 'react';
import {Modal, ModalBody, ModalHeader} from 'mdbreact';

class ModalPage extends Component {
    
    state = {
            modal: false
        };

    toggle= () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    

    render() {
        return (
            <Modal isOpen={this.state.modal} toggle={this.toggle} centered>
                <ModalHeader toggle={this.toggle}>{this.props.title}</ModalHeader>
                <ModalBody>
                    {this.props.children}
                </ModalBody>
            </Modal>
        );
    }
}

export default ModalPage;
