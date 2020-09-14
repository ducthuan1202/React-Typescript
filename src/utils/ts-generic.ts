import React from 'react';

// hàm với tham số truyền vào được định nghĩa trước
function G1<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}
const G1A = <T, K extends keyof T>(obj: T, key: K) => {
    return obj[key];
};

let examp;

examp = G1({ name: 123 }, 'name');
examp = G1A({ name: 123 }, 'name');

/** 
 * ************************************************************************ 
 * xem thêm tại: 
 * @link https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html
 * 
 * ************************************************************************ 
*/
interface Person {
    name: string;
    age: number;
}