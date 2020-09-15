import React from 'react';
import {TableView, TableViewProps} from 'components/TableView';
import { TodoModel } from 'models/TodoModel';

export const AboutUs: React.FC = React.memo(() => {

    const tableProps:TableViewProps<TodoModel> = {
        data: [
            {id: '1', name: 'Todo 1', status: 'pending'},
            {id: '2', name: 'Todo 2', status: 'done'},
            {id: '3', name: 'Todo 3', status: 'doing'},
        ],
        columns: [
            {key: 'name', title: 'Todo Name'},
            {key: 'status', title: 'Status'},
            {key: 'id', title: 'ID'},
        ]
    }

    return (
        <div>

            <h1>About us</h1>

            <TableView data={tableProps.data} columns={tableProps.columns}/>

        </div>
    );
});
