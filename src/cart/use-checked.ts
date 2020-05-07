import { useState } from 'react';
import { CartItem } from './index';

type CheckedMap = {
	[id: number]: boolean;
};
type OncheckedChange<T> = (item: T, checked: boolean) => any;

type Option = {
	//用来在map里记录勾选状态的key 一般取id
	key?: string;
};

//商品勾选
const [checkedMap, setCheckedMap] = useState<CheckedMap>({});
// const onCheckedChange: OncheckedChange<T> = (cartItem, checked) => {
// 	const { id } = cartItem;
// 	const newCheckedMap = Object.assign({}, checkedMap, {
// 		[id]: checked,
// 	});
// 	setCheckedMap(newCheckedMap);
// };

//cartItems积分总和
const sumPrice = (cartItems: CartItem[]) => {
	return cartItems.reduce((sum, cur) => sum + cur.price, 0);
};

//返回已选中的所有cartItems
const filterChecked = () => ({});
// Object.entries(checkedMap)
// //filter出checked为true的项
// .filter(entries => Boolean(entries[1]))
// //从cartData中根据id来map出选中列表
// .map(([checkedId]) => cartData.find(({id}) => id === Number(checkedId)))

export const useChecked = <T extends Record<string, any>>(dataSource: T[], { key = 'id' }: Option = {}) => {};
