import React from 'react';
import { ProductModel } from 'models/ProductModel';
import { ProductItemList } from 'features/product/ProductItemList';
import productsData from 'json/products.json';

export const ProductList: React.FC = React.memo(() => {
    const products: Array<ProductModel> = productsData;

    return (
        <div>
            <h1>ProductList</h1>
            {products.map((item, index) => (
                <ProductItemList key={index} product={item} />
            ))}
        </div>
    );
});
