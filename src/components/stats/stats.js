import React from 'react';

export default function Stats({ items }) {
	const packed = items.filter((item) => item.packed).length;
	const percent = Math.round((packed / items.length) * 100);
	return (
		<footer className='stats'>
			{items.length > 0 ? (
				<em>
					You have {items.length} items on your list and you already packed {packed}. (${percent}%)
				</em>
			) : (
				<em>Start adding items to your List...</em>
			)}
		</footer>
	);
}
