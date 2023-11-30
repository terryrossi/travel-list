import React, { useState } from 'react';

export default function ItemForm({ onAddItems }) {
	const [quantity, setQuantity] = useState(1);
	const [description, setDescription] = useState('');

	const handleQuantityChange = (event) => {
		setQuantity(parseInt(event.target.value));
	};
	const handleDescriptionChange = (event) => {
		setDescription(event.target.value);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		if (!description) return;
		const newItem = { quantity, description, packed: false, id: Date.now() };
		onAddItems(newItem);
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
