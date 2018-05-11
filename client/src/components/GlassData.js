import React, {Component} from 'react';
import {Card, Table} from 'mdbreact';

class GlassData extends Component {


    render() {
        return(
            <div>
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