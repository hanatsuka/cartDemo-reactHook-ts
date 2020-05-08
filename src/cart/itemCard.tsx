import React from 'react';
import { CartItem } from './';
import { OnCheckedChange } from './use-checked';
import { Typography } from 'antd';

interface Props {
	item: CartItem;
	checked: boolean;
	onCheckedChange: OnCheckedChange;
}
const ItemCard = (props: Props) => {
	const { item, checked, onCheckedChange } = props;
	const { name, price } = item;

	const onWrapCheckedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.persist();
		const { checked } = e.target;
		console.log('e>>>', e);
		onCheckedChange(item, checked);
	};
	return (
		<div className="item-card">
			<div className="checkbox-wrap">
				<input type="checkbox" checked={checked} onChange={onWrapCheckedChange} />
			</div>
			<p className="item-info">
				{name} <Typography.Text mark>${price}</Typography.Text>
			</p>
		</div>
	);
};

export default ItemCard;
