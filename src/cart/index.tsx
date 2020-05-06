import React from 'react';

export interface CartItem {
	id: number;
	name: string;
	price: number;
}

const cartData = Array(5)
	.fill(undefined)
	.map((v, i) => ({
		id: i,
		name: `商品${i}`,
		price: Math.round(Math.random() * 100),
	}));

export default function Cart() {
	return <div className="cart">1111</div>;
}
