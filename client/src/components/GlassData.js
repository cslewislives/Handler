import React, {Component} from 'react';
import {Card, Table} from 'mdbreact';
import API from '../utils/API';
import Auth from '../utils/Auth';

class GlassData extends Component {

    state = {
        glasses: []
    }

    componentDidMount() {
        API
        .getGlass(Auth.getToken())
        .then(res => {
            this.setState({glasses: res.data});
            console.log(this.state.glasses);
            this.calculateMissing();
            console.log(this.state.glasses);
        })
    }

    calculateMissing() {
        this.state.glasses.map((glass, i) => {
            let state = this.state.glasses;
            let missing = glass.par - glass.total;
            console.log(missing);
            if (missing < 0) {
                missing = 0;
                state[i].missing = missing;
                this.setState({glasses: state});
            } else {
                state[i].missing = missing;
                this.setState({glasses: state});
            }
        })
    }

    render() {
        return (
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
                        {this.state.glasses.map((glass, i) => (
                            <tr key={i} className='text-center'>
                                <th scope='row' >{glass.glass}</th>
                                <td>{glass.total} </td>
                                <td>{glass.par} </td>
                                <td>{glass.missing} </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Card>
        )
    }

};

export default GlassData;