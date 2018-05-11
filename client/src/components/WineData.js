import React, {Component} from 'react';
import {Card, Table} from 'mdbreact';

class WineData extends Component {


    render() {
        return(
            <div>
                <Card>
                    <Table hover>
                        <thead className='mdb-color darken-3'>
                            <tr className='text-white text-center'>
                                <th>Wine</th>
                                <th>Total</th>
                                <th>Par</th>
                                <th>Missing</th>
                                <th>Distributor</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props
                                .wine
                                .map((item, i) => (
                                    <tr key={i} className='text-center'>
                                        <th scope='row'>{item.wine}</th>
                                        <td>{item.total}
                                        </td>
                                        <td>{item.par}
                                        </td>
                                        <td>{item.missing}
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

export default WineData;