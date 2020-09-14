import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { PostModel } from 'models/PostModel';
import { AxiosInstance } from 'utils/AxiosInstance';
import { Spinner, Card, Button, Toast } from 'react-bootstrap';

interface PostDetailProps extends RouteComponentProps<any> {}

type Store = {
    isLoading: boolean;
    post?: PostModel;
    error?: string;
};

export const PostDetail: React.FC<PostDetailProps> = React.memo(({ match, history }) => {
    const postId = parseInt(match.params['id']);

    const [store, setStore] = useState<Store>({
        isLoading: true,
    });

    const { post, isLoading, error } = store;

    // use effect
    useEffect(() => {
        const getData = async () => {
            AxiosInstance.get<PostModel>(`/posts/${postId}`)
                .then((res) => {
                    setStore({
                        post: res.data,
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

        getData();
    }, [postId]);

    // kiểm tra nếu như đang tải dữ liệu
    if (isLoading) {
        return (
            <Spinner animation="border" role="status">
                <span className="sr-only">Loading...</span>
            </Spinner>
        );
    }

    // kiểm tra nếu như không load được post
    if (!post) {
        return (
            <Toast show={true}>
                <Toast.Header>
                    <strong className="mr-auto">Error</strong>
                </Toast.Header>
                <Toast.Body>{error}</Toast.Body>
            </Toast>
        );
    }

    // hiển thị thông tin bài post
    return (
        <Card>
            <Card.Body>
                <Card.Title>{post?.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{post?.userId}</Card.Subtitle>
                <Card.Text>{post?.body}</Card.Text>
            </Card.Body>

            <Button onClick={() => history.goBack()}>Back</Button>
        </Card>
    );
});
