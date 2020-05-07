import React from 'react';

import { Typography } from 'antd';
const ItemCard = (props) => {
	const { item, checked, onCheckedChange } = props;
	const { name, price } = item;

	const onWrapCheckedChange = (e) => {
		const { checked } = e.target;
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
