import { React, useState } from 'react';
import Item from '../item/item';

export default function ItemList({ items, onDeleteItem, onToggleItem, onClearList }) {
	// console.log('in itemlist : ', items);

	const [sortBy, setSortBy] = useState('unsorted');

	const handleSortChange = (event) => {
		setSortBy(event.target.value);
	};

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
							onDeleteItem={onDeleteItem}
							onToggleItem={onToggleItem}
						/>
					))}
				</ul>
				<div className='actions'>
					{/* <label htmlFor='sort-select'>Sort By:</label> */}
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
						onClick={onClearList}>
						Clear List
					</button>
				</div>
			</div>
		</div>
	);
}
