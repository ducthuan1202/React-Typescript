import React, { useEffect, useState } from 'react';
import { PostModel } from 'models/PostModel';
import { AxiosInstance } from 'utils/AxiosInstance';
import { Table, Button, ButtonGroup, Spinner, Toast } from 'react-bootstrap';

type Store = {
    isLoading: boolean;
    posts?: Array<PostModel>;
    error?: string;
};

export const DemoAxios: React.FC = React.memo(() => {
    const [store, setStore] = useState<Store>({
        isLoading: true,
    });

    useEffect(() => {
        const getData = async () => {
            AxiosInstance.get<Array<PostModel>>(`/posts`)
                .then((res) => {
                    setStore({
                        posts: res.data,
                        isLoading: false,
                    });
                })
                .catch((err) => {
                    console.log(err.response);
                    setStore({
                        isLoading: false,
                        error: 'Can not load data.',
                    });
                });
        };

        // không cần gọi await, hàm trong useffect tự động thực hiện
        getData();
    }, []);

    const { posts, isLoading, error } = store;

    // kiểm tra nếu như đang tải dữ liệu
    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        );
    }

    // kiểm tra nếu như không load được post
    if (!posts) {
        return (
            <Toast show={true}>
                <Toast.Header>
                    <strong className="mr-auto">Error</strong>
                </Toast.Header>
                <Toast.Body>{error}</Toast.Body>
            </Toast>
        );
    }

    // render view
    return (
        <Table striped bordered size="sm" responsive>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>User ID</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {posts.length === 0 ? (
                    <tr>
                        <td colSpan={4}>No data</td>
                    </tr>
                ) : (
                    posts.map((item, index) => (
                        <tr key={index}>
                            <td> {item.id} </td>
                            <td> {item.title} </td>
                            <td className="text-center"> {item.userId} </td>
                            <td className="text-right">
                                <ButtonGroup size="sm">
                                    <Button variant="secondary" href={`/posts/${item.id}`}>
                                        View
                                    </Button>
                                    <Button variant="info" href={`/posts/${item.id}`}>
                                        Update
                                    </Button>
                                    <Button variant="warning" href={`/posts/${item.id}`}>
                                        Delete
                                    </Button>
                                </ButtonGroup>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </Table>
    );
});
