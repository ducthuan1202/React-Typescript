import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { RouterLayout } from 'components/RouterLayout';
import { Homepage } from 'views/pages/Homepage';
import { AboutUs } from 'views/pages/AboutUs';
import { PageNotFound } from 'views/pages/PageNotFound';
import { EmptyLayout } from 'views/layouts/EmptyLayout';
import { ProductList } from 'views/pages/product/ProductList';
import { ProductDetail } from 'views/pages/product/ProductDetail';

function App() {
    return (
        <div className="container">
            <BrowserRouter>
                <Switch>
                    <RouterLayout path="/" exact component={Homepage} />
                    <RouterLayout path="/about-us" component={AboutUs} />

                    <RouterLayout path="/products" exact component={ProductList} />
                    <RouterLayout path="/products/:id" component={ProductDetail} />

                    <RouterLayout path="*" component={PageNotFound} layout={EmptyLayout} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
