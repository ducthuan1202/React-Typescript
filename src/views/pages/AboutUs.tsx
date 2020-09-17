import React from 'react';
import {TableView, TableViewProps} from 'components/TableView';
import { TodoModel } from 'models/TodoModel';

export const AboutUs: React.FC = React.memo(() => {

    const tableProps:TableViewProps<TodoModel> = {
        data: [
            {id: '1', name: 'Contextual variations', status: 'pending'},
            {id: '2', name: 'Pill badges', status: 'done'},
            {id: '3', name: 'Link color', status: 'doing'},
        ],
        columns: [
            {key: 'id', title: 'ID'},
            {key: 'name', title: 'Todo Name'},
            {key: 'status', title: 'Status'},
            {key: 'status', title: 'Status', render: (item) =>{
                return (<a href="/" className="badge badge-dark">Edit</a>);
            } },
        ]
    }

    return (
        <div>

            <h1>About us</h1>

            <TableView data={tableProps.data} columns={tableProps.columns}/>

        </div>
    );
});
