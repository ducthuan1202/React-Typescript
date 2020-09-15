import React from 'react';
import { Table } from 'react-bootstrap';
import { BaseModel } from 'models/BaseModel';

type Column<T>  = {
    title: string;
    key: keyof T;
}

/**
 * Sử dụng Column thì không được
 *
 * nhưng nếu viết trực tiếp thì ok
 *
 * => chưa hiểu rõ
 */
export interface TableViewProps<T = BaseModel> {
    data: Array<T>;
    columns: Array<{
        title: string;
        key: keyof T;
    }>;
    // columns: Array<Column<T>>;
}

export const TableView = React.memo<TableViewProps>(({ data, columns }) => {
    return (
        <Table bordered size="sm">
            <thead>
                <tr>
                    {columns.map((col, index) => (
                        <th key={index}>{col.title}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        {columns.map((col, index) => (
                            <td key={index}>{item[col.key]}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </Table>
    );
});
