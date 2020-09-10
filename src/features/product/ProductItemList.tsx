import React from 'react';
import { Link } from 'react-router-dom';
import { ProductModel } from 'models/ProductModel';

interface ProductItemListProps {
    product: ProductModel;
}

export const ProductItemList: React.FC<ProductItemListProps> = React.memo(({ product }) => {
    return (
        <div>
            <Link to={`/products/${product.id}`} title={product.name}>
                {product.name}
            </Link>
        </div>
    );
});
