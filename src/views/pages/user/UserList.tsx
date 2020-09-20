import React, { useEffect } from 'react';
import { UserModel } from 'models/UserModel';
import { TableView, TableViewProps } from 'components/TableView';
import axios from 'axios';
import { Store } from 'utils/Schema';
import {Button, Spinner} from 'react-bootstrap';

const axiosInstace = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    timeout: 10000,
    headers: { 'X-Custom-Header': 'demo-react-ts' },
});

export const UserList = React.memo(() => {
    const [store, setStore] = React.useState<Store<UserModel>>({
        isLoading: true,
        data: null,
        error: '',
    });

    useEffect(() => {
        axiosInstace
            .get('/users')
            .then((res) => {
                const result = res.data;
                let newStore: Store<UserModel> = {
                    isLoading: false,
                    data: result.success ? result.data : null,
                    error: result.success ? '' : result?.message,
                };
                setStore(newStore);
            })
            .catch((err) => {
                setStore({
                    isLoading: false,
                    data: null,
                    error: 'load data error',
                });
            });
    }, []);

    const tableProps: TableViewProps<UserModel> = {
        data: store.data?.data || [],
        columns: [
            { key: 'id', title: 'ID' },
            { key: 'name', title: 'User Name' },
            { key: 'email', title: 'Email' },
            { key: 'created_at', title: 'Created At' },
            { key: 'updated_at', title: 'Updated At' },
            { key: 'id', title: 'Action', render: (item) => <Button size="sm" variant="info">Edit</Button> },
        ],
    };


    const {isLoading} = store;
    // check loading
    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        );
    }

    return (
        <div>
            <h1>Users list</h1>
            <TableView {...tableProps} />
        </div>
    );
});
