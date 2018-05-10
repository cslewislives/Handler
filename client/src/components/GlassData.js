import React, {Component} from 'react';
import {Card, Table} from 'mdbreact';
// import Modal from './Modal';
// import API from '../utils/API';
// import Auth from '../utils/Auth';

class GlassData extends Component {

    // constructor(props) {
    //     super(props);
    //     this.child = React.createRef();
    //     this.state = {
    //         value: '',
    //         par: ''
    //     }
    // }

    // handleChange(event) {
    //     const field = event.target.name;
    //     const update = this.state.update;
    //     update[field] = event.target.value;
    //     this.setState({update});
    //     console.log(update);
    // }

    // handleUpdate(event) {
    //     event.preventDefault();
    //     if (this.state.update.glass === 'Choose Glass...') {
    //         alert('Please choose a glass to update');
    //     } else {
    //         const token = Auth.getToken();
    //         console.log(token);
    //         API.updateGlass(this.state.update, token).then((res, err) => {
    //             alert(`The total for ${res.data.glass} has been updated`);
    //             this.loadGlass();
    //             this.toggle();
    //         });
    //     }
    // }

    // toggle = () => {
    //     this.child.current.toggle();
    // }

    render() {
        return(
            <div>
                {/* <Modal ref={this.child} title='Update Par'>
                    <form>
                        <Input label='New Par' className='col-md-5' name='par' onChange={this.handleChange}/>
                    </form>                   
                    <Button onClick={this.handleUpdate}>Update</Button>
                </Modal> */}
                <Card>
                    <Table hover>
                        <thead className='mdb-color darken-3'>
                            <tr className='text-white text-center'>
                                <th>Glass</th>
                                <th>Total</th>
                                <th>Par</th>
                                <th>Missing</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props
                                .glasses
                                .map((glass, i) => (
                                    <tr key={i} className='text-center'>
                                        <th scope='row'>{glass.glass}</th>
                                        <td>{glass.total}
                                        </td>
                                        <td>{glass.par}
                                        </td>
                                        <td>{glass.missing}
                                        </td>
                                        {/* <td><Button value={glass.glass} onClick={this.toggle}><Fa icon='edit'/></Button>
                                        </td> */}
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Card>
            </div>
        )
    }
}

export default GlassData;