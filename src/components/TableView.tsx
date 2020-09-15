import React from 'react';
import { Table } from 'react-bootstrap';

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
 * 
 * để any là giá trị mặc định cho kiểu T là ok 
 */
export interface TableViewProps<T = any> {
    data: Array<T>;
    columns: Array<Column<T>>;
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
