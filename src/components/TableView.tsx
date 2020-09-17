import React from 'react';
import { Table } from 'react-bootstrap';

type Column<T> = {
    title: string;
    key: keyof T;
    render?: (item: any) => void;
};

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

    const heading = <tr>{columns.map((col, index) => <th key={index}>{col.title}</th>)}</tr>;

    const body = data.map((record, index) => (
        <tr key={index}>
            {columns.map((item, order) => (
                <td key={order}>{item.render ? item.render(record) : record[item.key]}</td>
            ))}
        </tr>
    ));
    
    return (
        <Table bordered size="sm">
            <thead>{heading}</thead>
            <tbody>{body}</tbody>
        </Table>
    );
});
