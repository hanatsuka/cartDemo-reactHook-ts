import { useState } from 'react';
import { CartItem } from './index';

type CheckedMap = {
	[id: number]: boolean;
};
export type OnCheckedChange = (item: CartItem, checked: boolean) => any;

type Option = {
	//用来在map里记录勾选状态的key 一般取id
	key?: string;
};

export const cartData = Array(5)
	.fill(undefined)
	.map((v, i) => ({
		id: i,
		name: `商品${i}`,
		price: Math.round(Math.random() * 100),
	}));

export const useChecked = () => {
	//商品勾选

	const [checkedMap, setCheckedMap] = useState({});

	const onCheckedChange: OnCheckedChange = (cartItem, checked) => {
		const { id } = cartItem;
		const newCheckedMap = Object.assign({}, checkedMap, {
			[id]: checked,
		});
		setCheckedMap(newCheckedMap);
	};
	console.log('checkedMap', checkedMap);

	//返回已选中的所有cartItems
	const filterChecked = () => {
		return [];
		// return (
		// 	Object.entries(checkedMap)
		// 		// 通过这个filter 筛选出所有checked状态为true的项
		// 		.filter((entries) => Boolean(entries[1]))
		// 		// 再从cartData中根据id来map出选中列表
		// 		.map(([checkedId]) => cartData.find(({ id }) => id === Number(checkedId)))
		// );
	};

	// export const useChecked = <T extends Record<string, any>>(dataSource: T[], { key = 'id' }: Option = {}) => {};

	const checkedAll = false;

	const onCheckedAllChange = (newCheckAll: boolean) => {
		let newCheckedMap: CheckedMap = {};
		if (newCheckAll) {
			cartData.forEach((cartItem) => {
				newCheckedMap[cartItem.id] = true;
			});
		}
		setCheckedMap(newCheckAll);
	};
	return {
		checkedMap,
		onCheckedChange,
		filterChecked,
		onCheckedAllChange,
		checkedAll,
	};
};
