import React from 'react';
import { ProductModel } from 'models/ProductModel';

interface DemoListProps {
    data: Array<ProductModel>;
    fieldsList: Array<keyof ProductModel>;
}

/** ************************************************************************ */
// đây là cách tạo ra 1 interface động với kiểu T truyền vào
// thay vì như DemoListProps chúng ta fix cứng kiểu phụ thuộc là ProductModel
// thì ở đây, kiểu phụ thuộc có thể linh hoạt hơn
interface Meme<T> {
    data: Array<T>;
    fields: Array<keyof T>;
}

/** ************************************************************************ */
// định nghĩ 1 Type Mix là 1 trong các key của ProductModel
type Mix = keyof ProductModel;
let myMix: Mix = 'quantity';

/** ************************************************************************ */
// định nghĩ 1 kiểu Mix là 1 mảng các key của ProductModel
type MixArr = Array<keyof ProductModel>;
let myMixArr: MixArr = ['id', 'name', 'price'];

/** ************************************************************************ */
// Partial<Type>
// Constructs a type with all properties of Type set to optional.
// This utility will return a type that represents all subsets of a given type.

// định nghĩa 1 Type với đầy đủ các thuộc tính của kiểu kế thừa
// nhưng các thuộc tính là là optional. Nghĩa là có thể 1 objec rỗng
type MixPartial = Partial<ProductModel>;
let myMixPartial: MixPartial = { id: 123 };

/** ************************************************************************ */
// Readonly<Type>
// Constructs a type with all properties of Type set to readonly,
// meaning the properties of the constructed type cannot be reassigned.

// định nghĩa 1 Type với đẩy đủ các thuộc tính của kiểu kế thừa
// nhưng không thể thay đổi giá trị sau khi khởi tạo
type MixReadonly = Readonly<MixPartial>;
let myMixReadonly: MixReadonly = { price: 12 };

/** ************************************************************************ */
// Record<Keys,Type>
// Constructs a type with a set of properties Keys of type Type.
// This utility can be used to map the properties of a type to another type.

// định nghĩa 1 Type với các thuộc tính được định sẵn và kiểu giá trị
// được chọn là lớp kế thừa

// ở đây, MixRecord là 1 object có 2 thuộc tính: sp_1, sp_2,
// cả 2 đều có kiểu giá trị là MixPartial
type MixRecord = Record<'sp_1' | 'sp_2', MixPartial>;
let myMixRecord: MixRecord = {
    sp_1: {},
    sp_2: {},
};

/** ************************************************************************ */
// Pick<Type, Keys>
// Constructs a type by picking the set of properties Keys from Type.

// định nghĩa 1 Type với 1 phần các thuộc tính của kiểu kế thừa
// ở đây, MixPick là 1 object mà chỉ có 2 key là: weigth và height

type MixPick = Pick<ProductModel, 'weight' | 'height'>;
let myMixPick: MixPick = {
    weight: 20,
    height: 10,
};

/** ************************************************************************ */
// Omit<Type, Keys>
// Constructs a type by picking all properties from Type and then removing Keys.

// định nghĩa 1 Type là chính đối tượng cha, nhưng bỏ qua 1 vài thuộc tính
type MixOmit = Omit<ProductModel, 'id' | 'name' | 'category_id' | 'in_stock'>;
let myMixOmit: MixOmit = {
    height: 1,
    weight: 2,
    price: 11,
    quantity: 22,
};

/** ************************************************************************ */
/**
 * còn rất khiểu utility trong typescript chưa được đề cập ở đây
 * nếu muốn tìm hiểu, có thể tìm kiếm tại:
 * @link https://www.typescriptlang.org/docs/handbook/utility-types.html
 */
/** ************************************************************************ */

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
