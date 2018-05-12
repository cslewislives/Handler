import React, {Component} from 'react';
import {Card, Table} from 'mdbreact';

class ItemData extends Component {

    renderHeadings = () => {
        let type = this.props.type;
        switch(type) {
            case 'employees':
            return (
                <tr className='text-white text-center'>
                    <th>Employees</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            )
            case 'regulars':
            return (
                <tr className='text-white text-center'>
                    <th>Regulars</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            )
            default:
            return (
                <tr className='text-white text-center'>
                    <th>{this.props.type}</th>
                    <th>Total</th>
                    <th>Par</th>
                    <th>Missing</th>
                    {this.props.distributor && <th>Distributor</th>}
                </tr>
            )
        }
    }

    render() {
        const distributor = this.props.distributor;
        return(
            <div>
                <Card>
                    <Table hover>
                        <thead className='mdb-color darken-3'>
                            {this.renderHeadings()}
                        </thead>
                        <tbody>
                        {this.props.type === 'employees' || this.props.type === 'regulars' ? this.props.items.map((item, i) => (
                                    <tr key={i} className='text-center'>
                                        <th scope='row'>{`${item.firstName} ${item.lastName}`}</th>
                                        <td>{item.email}
                                        </td>
                                        <td>{item.phone}
                                        </td>
                                    </tr>
                                )) : this.props.items.map((item, i) => (
                                    <tr key={i} className='text-center'>
                                        <th scope='row'>{item.item}</th>
                                        <td>{item.total}
                                        </td>
                                        <td>{item.par}
                                        </td>
                                        <td>{item.missing}
                                        </td>
                                        {distributor && <td>{item.distributor}
                                        </td>}
                                    </tr>
                                ))}
                        </tbody>
                    </Table>
                </Card>
            </div>
        )
    }
}

export default ItemData;