import React, { useState } from 'react';
import Logo from '../logo/logo';
import ItemForm from '../item-form/item-form';
import ItemList from '../item-list/item-list';
import Stats from '../stats/stats';

/**
 * App Component
 * Main component that encapsulates the entire application.
 * Manages the state for the items and handles the CRUD operations.
 */
export default function App() {
	// State to store the list of items
	const [items, setItems] = useState([]);

	/**
	 * Adds a new item to the items state.
	 * @param {Object} item - The new item to be added.
	 */
	function handleAddItems(item) {
		setItems((items) => [...items, item]);
	}

	/**
	 * Deletes an item from the items state based on its id.
	 * @param {string} id - The id of the item to be deleted.
	 */
	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}

	/**
	 * Toggles the packed status of an item.
	 * @param {string} id - The id of the item to toggle.
	 */
	function handleToggleItem(id) {
		setItems((items) =>
			items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item))
		);
	}

	/**
	 * Clears the entire items list after confirmation.
	 */
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
