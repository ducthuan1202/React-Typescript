import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

interface PageNotFoundProps extends RouteComponentProps<any> {}

export const PageNotFound: React.FC<PageNotFoundProps> = React.memo(({ history }) => {
    return (
        <div className="jumbotron text-center">
            <div className="container">
                <h1>Page Not Found - 404</h1>

                <p className="lead text-muted">
                    Something short and leading about the collection below—its contents, the creator, etc. Make it short
                    and sweet, but not too short so folks don’t simply skip over it entirely.
                </p>
                <button className="btn btn-dark" onClick={() => history.goBack()}>
                    Back
                </button>
            </div>
        </div>
    );
});
