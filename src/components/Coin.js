import React from 'react';
import '../css/Coin.css';

const Coin = (props) => {
	const info = props.info;

	let arrow;
	if (info.percent24h > 0) {
		arrow = <div className="arrow-up"></div>
	} else {
		arrow = <div className="arrow-down"></div>
	}

	return (
		<div className="coin-container">
			<ul className="coin-list">
				<li>
					<div className="coin-title-horizontal">
						<div className="coin-container-horizontal">
							{ arrow }
							<span className="coin-symbol"> {info.symbol} | {info.name}</span>
						</div>
						<span className="coin-price">{info.price}</span>
					</div>
				</li>
			</ul>
		</div>
	);
}

export default Coin;


