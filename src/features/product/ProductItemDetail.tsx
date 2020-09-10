import { ProductModel } from 'models/ProductModel';
import React from 'react';

interface ProductItemDetailProps {
    product?: ProductModel;
}

export const ProductItemDetail: React.FC<ProductItemDetailProps> = React.memo(({ product }) => {
    if (product) {
        return (
            <div>
                <h1>{product.name}</h1>
                <p>Price: {product.price}</p>
                <p>Weight: {product.weight}</p>
                <p>Height: {product.height}</p>
                <p>In Stock: {product.in_stock ? 'Yes' : 'No'}</p>
            </div>
        );
    }

    return (
        <div>
            <h5>Product not found</h5>
        </div>
    );
});
