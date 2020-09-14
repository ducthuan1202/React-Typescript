import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import RoutesList from 'routes/routes';

import { RouterLayout } from 'components/RouterLayout';

import { EmptyLayout } from 'views/layouts/EmptyLayout';
import { PageNotFound } from 'views/pages/PageNotFound';

function App() {
    return (
        <BrowserRouter>
            <Switch>
                {RoutesList.map((item, index) => (
                    <RouterLayout {...item} key={index} />
                ))}
                <RouterLayout path="*" component={PageNotFound} layout={EmptyLayout} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
