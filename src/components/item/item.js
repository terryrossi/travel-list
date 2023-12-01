import React from 'react';

/**
 * Item Component
 * A component that represents a single item in the item list, including its packed status, quantity, description, and actions.
 * @param {object} item - An object representing an item, including its id, quantity, description, and packed status.
 * @param {number} index - The index of the item in the list (not used in the current implementation).
 * @param {function} onDeleteItem - A callback function to handle the deletion of the item.
 * @param {function} onToggleItem - A callback function to handle toggling the packed status of the item.
 */
export default function Item({ item, index, onDeleteItem, onToggleItem }) {
	// Debugging log to console
	console.log('in item : ', item);

	return (
		<li>
			{/* Checkbox to toggle the packed status of the item */}
			<input
				type='checkbox'
				value={item.packed}
				onChange={() => onToggleItem(item.id)}
			/>
			{/* Item description with conditional styling based on packed status */}
			<span style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
				{item.quantity} {item.description}
			</span>
			{/* Button to trigger deletion of the item */}
			<button onClick={() => onDeleteItem(item.id)}> ❌ </button>
		</li>
	);
}
