import React from 'react';

export default function Item({ item, index, onDeleteItem, onToggleItem }) {
	// const [isChecked, setIsChecked] = useState(false);

	// const handleCheckboxChange = () => {
	// 	setIsChecked(!isChecked);
	// };
	console.log('in item : ', item);

	return (
		<li>
			<input
				type='checkbox'
				value={item.packed}
				// checked={isChecked}
				onChange={() => onToggleItem(item.id)}
			/>
			<span style={{ textDecoration: item.packed ? 'line-through' : 'none' }}>
				{item.quantity} {item.description}
			</span>
			<button onClick={() => onDeleteItem(item.id)}> ❌ </button>
		</li>
	);
}
