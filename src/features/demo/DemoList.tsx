import React from 'react';
import { ProductModel } from 'models/ProductModel';

interface DemoListProps {
    data: Array<ProductModel>;
    fieldsList: Array<keyof ProductModel>;
}

export const DemoList: React.FC<DemoListProps> = React.memo(({ data, fieldsList }) => {
    return (
        <div>
            <h3>Demo list</h3>
            {data.map((item, index) => (
                <div key={index} className="my-3 border-bottom">
                    <h5>{item?.name}</h5>
                    {fieldsList.map((key) => (
                        <p key={key}>
                            {key}: {item[key]}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    );
});
