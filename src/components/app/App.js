import React, { useState } from 'react';
import Logo from '../logo/logo';
import ItemForm from '../item-form/item-form';
import ItemList from '../item-list/item-list';
import Stats from '../stats/stats';

export default function App() {
	const [items, setItems] = useState([]);

	function handleAddItems(item) {
		setItems((items) => [...items, item]);
	}
	// console.log(items);
	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}

	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
		);
	}
	function handleClearList() {
		const confirmed = window.confirm('Are you sure you want to delete all items?');

		if (confirmed) setItems([]);
	}
	return (
		<div className='app'>
			<Logo />
			<ItemForm onAddItems={handleAddItems} />
			<ItemList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onClearList={handleClearList}
			/>
			<Stats items={items} />
		</div>
	);
}
