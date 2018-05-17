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
            case 'Wine':
            return (
                <tr className='text-white text-center'>
                    <th>Wine</th>
                    <th>Total</th>
                    <th>Par</th>
                    <th>Missing</th>
                    {this.props.distributor && <th>Distributor</th>}
                </tr>
            )
            default:
            return (
                <tr className='text-white text-center'>
                    <th>{this.props.type}</th>
                    <th>Total/Day</th>
                    <th>Total/Turn</th>
                    <th>Par/Day</th>
                    <th>Par/Turn</th>
                    <th>Missing</th>
                </tr>
            )
        }
    }

    renderData = () => {
        let type = this.props.type;
        switch(type) {
            case 'employees':
            return (
                this.props.items.map((item, i) => (
                    <tr key={i} className='text-center'>
                        <th scope='row'>{`${item.firstName} ${item.lastName}`}</th>
                        <td>{item.email}
                        </td>
                        <td>{item.phone}
                        </td>
                    </tr>
                ))
            )
            case 'regulars':
            return (
                this.props.items.map((item, i) => (
                    <tr key={i} className='text-center'>
                        <th scope='row'>{`${item.firstName} ${item.lastName}`}</th>
                        <td>{item.email}
                        </td>
                        <td>{item.phone}
                        </td>
                    </tr>
                ))
            )
            case 'Wine':
            return (
                this.props.items.map((item, i) => (
                    <tr key={i} className='text-center'>
                        <th scope='row'>{item.item}</th>
                        <td>{item.total}
                        </td>
                        <td>{item.par}
                        </td>
                        <td>{item.missing}
                        </td>
                        {this.props.distributor && <td>{item.distributor}
                        </td>}
                    </tr>
                ))
            )
            default:
            return (
                this.props.items.map((item, i) => (
                    <tr key={i} className='text-center'>
                        <th scope='row'>{item.item}</th>
                        <td>{item.totalDay}
                        </td>
                        <td>{item.totalTurn}
                        </td>
                        <td>{item.parDay}
                        </td>
                        <td>{item.parTurn}
                        </td>
                        <td>{item.missing}
                        </td>
                    </tr>
                ))
            )
        }

    }

    render() {
        return(
            <Card>
                <Table hover>
                    <thead className='mdb-color darken-3'>
                        {this.renderHeadings()}
                    </thead>
                    <tbody>
                        {this.renderData()}
                    </tbody>
                </Table>
            </Card>
        )
    }
}

export default ItemData;