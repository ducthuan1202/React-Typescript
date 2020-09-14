import React, { useEffect } from 'react';
import { PostModel } from 'models/PostModel';
import { AxiosInstance } from 'utils/AxiosInstance';

export const DemoAxios: React.FC = React.memo(() => {
    const [posts, setPosts] = React.useState<Array<PostModel>>([]);

    useEffect(() => {
        const getData = async () => {
            AxiosInstance.get<Array<PostModel>>(`/posts`).then((res) => {
                if (res.status === 200) {
                    setPosts(res.data);
                }
            });
        };

        // không cần gọi await, hàm trong useffect tự động thực hiện
        getData();
    }, []);

    // render view
    return (
        <div>
            <h3>Demo Axios</h3>

            {posts.length === 0 ? <p>Loading...</p> : <p>Total: {posts.length} posts</p>}

            {posts.map((item) => (
                <div>
                    <h6>
                        {item.id}. {item.title}
                    </h6>
                </div>
            ))}
        </div>
    );
});
