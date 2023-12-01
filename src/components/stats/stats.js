import React from 'react';

/**
 * Stats Component
 * A component that displays statistical information about the items list, such as the total number of items,
 * the number of packed items, and the percentage of items packed.
 * @param {array} items - An array of item objects.
 */
export default function Stats({ items }) {
	// Counts the number of packed items
	const packed = items.filter((item) => item.packed).length;

	// Calculates the percentage of items that are packed
	const percent = Math.round((packed / items.length) * 100);

	return (
		<footer className='stats'>
			{items.length > 0 ? (
				<em>
					{/* Displays total items, packed items, and packed percentage */}
					You have {items.length} items on your list and you already packed {packed}. ({percent}%)
				</em>
			) : (
				<em>Start adding items to your List...</em> // Prompt to add items if the list is empty
			)}
		</footer>
	);
}
