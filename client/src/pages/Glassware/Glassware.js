import React, {Component} from 'react';
// import {Link,} from 'react-router-dom';
import Navbar from '../../components/Navbar';
import Modal from '../../components/Modal';
import {Container, Button, Card, CardBody, CardTitle, CardText} from 'mdbreact';

class Glassware extends Component {

    // constructor(props) {     super(props);     this.child = React.createRef(); }
    // toggle = () => {     this.child.current.toggle(); } componentDidMount() {
    // this.toggle(); }

    render() {

        return (
            <div>
                <Card className='mb-12'>
                    <CardBody>
                        <CardTitle className='text-center'>Glassware</CardTitle>
                        <CardText>
                            <h2 className='text-center' >NEED: </h2>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
};

export default Glassware;