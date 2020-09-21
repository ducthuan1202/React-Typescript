import React, { useEffect } from 'react';
import { Button, Spinner, Modal, Form } from 'react-bootstrap';
import axios from 'axios';
import { TableView, TableViewProps } from 'components/TableView';
import { UserModel } from 'models/UserModel';
import { Store } from 'utils/Schema';

const axiosInstace = axios.create({
    timeout: 10000,
    headers: { 'X-Custom-Header': 'demo-react-ts' },
});

export const UserList = React.memo(() => {
    const [showModal, setShowModal] = React.useState<boolean>(false);

    const [user, setUser] = React.useState<UserModel | null>();

    const [store, setStore] = React.useState<Store<UserModel>>({
        isLoading: true,
        error: '',
        data: {
            current_page: 1,
            data: [],
            first_page_url: '',
            from: 1,
            to: 1,
            last_page: 1,
            last_page_url: '',
            next_page_url: '',
            path: 'http://127.0.0.1:8000/api/users',
            per_page: 1,
            prev_page_url: '',
            total: 1,
        },
    });

    /** use ref for modal */
    const inputNameRef = React.createRef<HTMLInputElement>();

    useEffect(() => {
        axiosInstace
            .get(store.data.path + '?page=' + store.data.current_page)
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
                    error: err.toJSON().message,
                });

                // for (let key in err) {
                //     console.log(key, err[key]);
                // }

                // console.log(err.toJSON());
            });
    }, [store.data.current_page, store.data.path]);

    /** handle next page */
    const setNextPage: React.MouseEventHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (store.data?.next_page_url) {
            setStore({
                ...store,
                isLoading: true,
                data: {
                    ...store.data,
                    current_page: store.data.current_page + 1,
                },
            });
        }
    };

    /** handle prev page */
    const setPrevPage: React.MouseEventHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if (store.data?.prev_page_url) {
            setStore({
                ...store,
                isLoading: true,
                data: {
                    ...store.data,
                    current_page: store.data.current_page - 1,
                },
            });
        }
    };

    /** handle close modal */
    const handleCloseModal = () => {
        setShowModal(false);
    };

    /** handle opent modal */
    const handleOpenModal = (item: UserModel) => {
        setUser(item);
        setShowModal(true);

        console.log(inputNameRef.current);

        setTimeout(function () {
            inputNameRef.current?.focus();
        }, 2e2);
    };

    /** handle input name onchange */
    const handleInputNameOnchange: React.ChangeEventHandler<HTMLInputElement> = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { value } = event.target;
        setUser((prev) => {
            return prev ? { ...prev, name: value } : null;
        });
    };

    /** get store properties */
    const { isLoading, error } = store;

    /** show loading */
    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        );
    }

    /** show error */
    if (error.length) {
        return <div className="alert alert-danger">{error}</div>;
    }

    /** config table list */
    const tableProps: TableViewProps<UserModel> = {
        data: store.data.data,
        columns: [
            { key: 'id', title: 'ID' },
            { key: 'name', title: 'User Name' },
            { key: 'email', title: 'Email' },
            { key: 'created_at', title: 'Created At' },
            { key: 'updated_at', title: 'Updated At' },
            {
                key: 'id',
                title: 'Action',
                render: (item) => (
                    <Button size="sm" variant="info" onClick={() => handleOpenModal(item)}>
                        Edit
                    </Button>
                ),
            },
        ],
    };

    /** get store.data properties */
    const { prev_page_url, next_page_url } = store.data;

    return (
        <div>
            <h1>Users list</h1>

            <TableView {...tableProps} />

            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className={'page-item ' + (prev_page_url ? '' : 'disabled')}>
                        <Button className="page-link" onClick={setPrevPage}>
                            Previous
                        </Button>
                    </li>
                    <li className={'page-item ' + (next_page_url ? '' : 'disabled')}>
                        <Button className="page-link" onClick={setNextPage}>
                            Next
                        </Button>
                    </li>
                </ul>
            </nav>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{user?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>New Name of User</Form.Label>
                            <Form.Control
                                placeholder="type"
                                value={user?.name}
                                onChange={handleInputNameOnchange}
                                ref={inputNameRef}
                            />
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleCloseModal}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
});
