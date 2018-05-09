import React from 'react';
import { Card, Table } from 'mdbreact';

const DataTable = props => (

    <Card>
        <Table hover>
            <thead className='mdb-color darken-3'>
                <tr className='text-white'>
                    <th>Glass</th>
                    <th>Total</th>
                    <th>Par</th>
                    <th>Missing</th>
                </tr>
            </thead>
            <tbody></tbody>
        </Table>
    </Card>

);

export default DataTable;