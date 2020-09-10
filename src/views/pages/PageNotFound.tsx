import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface PageNotFoundProps extends RouteComponentProps<any> {}

export const PageNotFound: React.FC<PageNotFoundProps> = React.memo(({ history }) => {
    return (
        <div>
            <h1>Page Not Found - 404</h1>
            <button className="btn btn-dark" onClick={() => history.goBack()}>
                Back
            </button>
        </div>
    );
});
