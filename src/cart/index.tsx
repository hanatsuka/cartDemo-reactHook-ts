import React from 'react';
import { List, Typography } from 'antd';
import ItemCard from './itemCard';
import { useChecked, cartData } from './use-checked';

export interface CartItem {
	id: number;
	name: string;
	price: number;
}

// const cartData = Array(5)
// 	.fill(undefined)
// 	.map((v, i) => ({
// 		id: i,
// 		name: `商品${i}`,
// 		price: Math.round(Math.random() * 100),
// 	}));

export default function Cart() {
	const { checkedAll, checkedMap, onCheckedAllChange, onCheckedChange, filterChecked } = useChecked();

	//cartItems积分总和
	const sumPrice = (cartItems: CartItem[]) => {
		return cartItems.reduce((sum, cur) => sum + cur.price, 0);
	};

	const onWrapCheckedAllChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const checkAll = e.target.checked;
		onCheckedAllChange(checkAll);
	};

	const total = sumPrice(filterChecked());

	const Footer = (
		<div className="footer">
			<div className="check-all">
				<input type="checkbox" checked={checkedAll} onChange={onWrapCheckedAllChange} />
				全选
			</div>
			<div>
				价格总计 <Typography.Text mark>${total}</Typography.Text>
			</div>
		</div>
	);
	const inputFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.persist();
		console.log(e);
	};
	return (
		<div className="cart">
			<input type="text" onChange={inputFunc} />
			<List
				header={<div>购物车</div>}
				footer={Footer}
				bordered
				dataSource={cartData}
				renderItem={(item) => {
					// const checked = checkedMap[item.id] || false;
					const checked = false;
					return (
						// <List.Item>
						<ItemCard item={item} checked={checked} onCheckedChange={onCheckedChange}></ItemCard>
						// </List.Item>
					);
				}}
			></List>
		</div>
	);
}
