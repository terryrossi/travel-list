import React, { useState } from 'react';
import Item from '../item/item';

/**
 * ItemList Component
 * A component that displays a list of items with sorting and clear list functionalities.
 * @param {Array} items - An array of item objects to be displayed.
 * @param {function} onDeleteItem - A callback function to handle the deletion of an item.
 * @param {function} onToggleItem - A callback function to handle toggling an item's packed status.
 * @param {function} onClearList - A callback function to handle clearing the list.
 */
export default function ItemList({ items, onDeleteItem, onToggleItem, onClearList }) {
	// State for sorting criteria
	const [sortBy, setSortBy] = useState('unsorted');

	/**
	 * Updates the sorting criteria based on user selection.
	 * @param {object} event - The event object from the select field.
	 */
	const handleSortChange = (event) => {
		setSortBy(event.target.value);
	};

	/**
	 * A function to sort items based on the selected sorting criteria.
	 * @param {object} a - The first item for comparison.
	 * @param {object} b - The second item for comparison.
	 * @returns {number} - The sorting order.
	 */
	const sortItems = (a, b) => {
		if (sortBy === 'description') {
			return a.description.localeCompare(b.description);
		} else if (sortBy === 'packed') {
			return a.packed - b.packed;
		} else if (sortBy === 'unsorted') {
			return;
		}
		return 0;
	};

	// Sort the items based on the selected sorting criteria
	const sortedItems = [...items].sort(sortItems);

	return (
		<div>
			<div className='list'>
				<ul>
					{sortedItems.map((item, index) => (
						<Item
							key={item.id}
							item={item}
							index={index}
							/**
							 * Lifting up state to App.js through function passed by App.js
							 */
							onDeleteItem={onDeleteItem}
							onToggleItem={onToggleItem}
						/>
					))}
				</ul>
				<div className='actions'>
					<select
						id='sort-select'
						value={sortBy}
						onChange={handleSortChange}>
						<option value='unsorted'>Not sorted</option>
						<option value='description'>Sort by Description</option>
						<option value='packed'>Sort by Packed Status</option>
					</select>
					<button
						className='sort'
						/**
						 * Lifting up state to App.js through function passed by App.js
						 */
						onClick={onClearList}>
						Clear List
					</button>
				</div>
			</div>
		</div>
	);
}
