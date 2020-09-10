import React from 'react';
import { RouteProps, Route } from 'react-router-dom';
import { MainLayout } from '../views/layouts/MainLayout';

type RouterLayoutProps = {
    layout?: React.ComponentType;
    component: React.ComponentType<any>;
} & RouteProps;

// export const RouterLayout:React.FC<RouterLayoutProps> = React.memo(({layout:Layout = MainLayout, component: Component, ...rest}) => {
export const RouterLayout = React.memo<RouterLayoutProps>(
    ({ layout: Layout = MainLayout, component: Component, ...rest }) => {
        /**
         * Có thể truyền {...rest} vào Layout để các component con phía trong có thể lấy được thông tin history, match,...
         * Hiện tại, chúng ta sử dụng hook của react-router-dom để lấy các thông tin này
         */
        return (
            <Route
                {...rest}
                render={(props) => (
                    <Layout>
                        <Component {...props} />
                    </Layout>
                )}
            />
        );
    }
);
