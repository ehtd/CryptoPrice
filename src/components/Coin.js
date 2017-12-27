import React from 'react';
import { formatPrice } from '../helpers';

const Coin = (props) => {
	const info = props.info;

	return (
		<div className="">
			<ul className="">
				<li>{info.symbol}</li>
				<li>{info.name}</li>
				<li>{formatPrice(info.price)}</li>
				<li>{(info.lastUpdated).toString()}</li>
			</ul>
		</div>
	);
}

export default Coin;


