import React, {Component} from 'react';
// import {Link,} from 'react-router-dom';
import Navbar from '../components/Navbar';
import Modal from '../components/Modal';
import {
    Col,
    Container,
    Button,
    Card,
    CardBody,
    CardTitle,
    CardText,
    Table,
    Input,
    FormInline
} from 'mdbreact';
import GlassData from '../components/GlassData';

class Glassware extends Component {

    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

    toggle = () => {
        this
            .child
            .current
            .toggle();
    }

    render() {

        return (
            <Container>
                <Modal ref={this.child}>
                    <form>
                        <select className='glass-select'>
                            <option defaultValue>Choose Glass...</option>
                            <option value='Wine'>Wine</option>
                            <option value='Water'>Water</option>
                            <option value='Rocks'>Rocks</option>
                            <option value='Coups'>Coups</option>
                            <option value='Port'>Port</option>
                            <option value='Mugs'>Mugs</option>
                        </select>
                        <Input label='New Total' className='col-md-4' name='glass-total' />
                        <Button>Update</Button>                        
                    </form>
                </Modal>
                <Card className='mb-12'>
                    <CardBody>
                        <CardTitle className='text-center'>Glassware</CardTitle>
                        {/* <CardText> */}
                        <h2 className='text-center'>NEED:
                        </h2>
                        {/* </CardText> */}
                        <Button onClick={this.toggle}>Update</Button>
                        <Button>Change Par</Button>
                    </CardBody>
                </Card>
                <Col md='6'>
                    <GlassData/>
                </Col>
            </Container>
        )
    }
};

export default Glassware;