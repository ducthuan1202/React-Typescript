import React from 'react';

interface Model {
    id: number;
    name: string;
}

/** ************************************************************************ */

interface Column<T> {
    title: string;
    key: keyof T;
}

type ArrayType<T> = Array<T>;

/** ************************************************************************ */

const data: ArrayType<Model> = [
    { id: 1, name: 'thuannd' },
    { id: 1, name: 'ducthuan' },
];

const columns: ArrayType<Column<Model>> = [
    { title: 'ID', key: 'id' },
    { title: 'name', key: 'name' },
];
