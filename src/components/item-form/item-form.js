import React, { useState } from 'react';

/**
 * ItemForm Component
 * A form component for adding new items.
 * @param {function} onAddItems - A callback function from App.js to handle adding new items.
 */
export default function ItemForm({ onAddItems }) {
	// State for the quantity of the item
	const [quantity, setQuantity] = useState(1);

	// State for the description of the item
	const [description, setDescription] = useState('');

	/**
	 * Updates the quantity state based on user input.
	 * @param {object} event - The event object from the input field.
	 */
	const handleQuantityChange = (event) => {
		setQuantity(parseInt(event.target.value));
	};

	/**
	 * Updates the description state based on user input.
	 * @param {object} event - The event object from the input field.
	 */
	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};

	/**
	 * Submits the form, creates a new item, and resets the form fields.
	 * @param {object} event - The event object from the form submission.
	 */
	const handleSubmit = (event) => {
		event.preventDefault();
		if (!description) return;
		const newItem = { quantity, description, packed: false, id: Date.now() };

		/**
		 * Lifting up state to App.js through function passed by App.js
		 */
		onAddItems(newItem);

		// Reset Fields (states) values
		setQuantity(1);
		setDescription('');
	};

	return (
		<form
			className='add-form'
			onSubmit={handleSubmit}>
			<h3> What do you need for your 🧳 trip?</h3>
			<input
				type='number'
				min='1'
				max='20'
				value={quantity}
				onChange={handleQuantityChange}
			/>
			<input
				type='text'
				value={description}
				placeholder='add item...'
				onChange={handleDescriptionChange}
			/>
			<button type='submit'>Add Item</button>
		</form>
	);
}
