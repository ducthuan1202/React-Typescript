import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import productsData from 'json/products.json';
import { ProductModel } from 'models/ProductModel';
import { ProductItemDetail } from 'features/product/ProductItemDetail';

interface ProductDetailProps extends RouteComponentProps<any> {}

export const ProductDetail: React.FC<ProductDetailProps> = React.memo(({ match, history }) => {
    const productId = parseInt(match.params['id']);

    const product: ProductModel | undefined = productsData.find((item) => item.id === productId);

    return (
        <div>
            <ProductItemDetail product={product} />

            <button className="btn btn-secondary" onClick={() => history.goBack()}>
                Back to list
            </button>
        </div>
    );
});
