import React, {Component} from 'react';
import {Card, Table} from 'mdbreact';

class SilverData extends Component {


    render() {
        return(
            <div>
                <Card>
                    <Table hover>
                        <thead className='mdb-color darken-3'>
                            <tr className='text-white text-center'>
                                <th>Silver</th>
                                <th>Total</th>
                                <th>Par</th>
                                <th>Missing</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props
                                .silver
                                .map((item, i) => (
                                    <tr key={i} className='text-center'>
                                        <th scope='row'>{item.silver}</th>
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

export default SilverData;