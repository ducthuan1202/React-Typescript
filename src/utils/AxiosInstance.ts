import axios from 'axios';

export const AxiosInstance = axios.create({
    // base url
    baseURL: 'https://jsonplaceholder.typicode.com',

    // giới hạn thời gian request
    timeout: 10000,

    // Thêm header mặc định
    headers: { 'X-Custom-Header': 'demo-react-ts' },

    // Thêm params mặc định
    params: {
        __key: 'jd3t2',
    },
});
