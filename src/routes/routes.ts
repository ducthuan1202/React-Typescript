import React from 'react';
import { RouteProps } from 'react-router-dom';
import { AuthLayout } from 'views/layouts/AuthLayout';

import { Homepage } from 'views/pages/Homepage';
import { AboutUs } from 'views/pages/AboutUs';
import { ProductList } from 'views/pages/product/ProductList';
import { ProductDetail } from 'views/pages/product/ProductDetail';
import { PostDetail } from 'views/pages/post/PostDetail';
import { UserList } from 'views/pages/user/UserList';

export const URL = {
    HOME_PAGE: '/',
    ABOUT_US: '/about-us',
    PRODUCTS: '/products',
    PRODUCT_DETAIL: '/products/:id([0-9]+)',
    POST_DETAIL: '/posts/:id([0-9]+)',
    USERS: '/users',
};

type RouterLayoutProps = {
    component: React.ComponentType<any>;
    layout?: React.ComponentType;
} & RouteProps;

const RoutesList: Array<RouterLayoutProps> = [
    {
        path: URL.HOME_PAGE,
        component: Homepage,
        exact: true,
    },
    {
        path: URL.ABOUT_US,
        component: AboutUs,
    },
    {
        path: URL.PRODUCTS,
        component: ProductList,
        exact: true,
        layout: AuthLayout
    },
    {
        path: URL.PRODUCT_DETAIL,
        component: ProductDetail,
        layout: AuthLayout
    },
    {
        path: URL.POST_DETAIL,
        component: PostDetail,
        layout: AuthLayout
    },
    {
        path: URL.USERS,
        component: UserList,        
    }
];

export default RoutesList;
