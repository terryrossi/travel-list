# To-Do List Application

## Objective

**To build a small web application with HTML, CSS, JavaScript AND REACT that creates a Travel List of Items and enables to Add an Item, Delete an Item, Strike any Item, Sort or Clear the list Items.**

## Features

- Add a new Item
- Delete an Item
- Strike any Item
- Sort the list of Items
- Clear the list of Items

### User Goals

To create a flexible List of Items Application

### Technical Requirements

- Use of React
  - Use State
  - Use Props
  - Use Click Events
  - Form Input field check on max number of items = 20
  - Form Select Sort field with 3 choices: unsorted, description, packed.
- Deploy on Github

### [Open the App Here](https://terryrossi.github.io/travel-list/)

### Screen Print

![Travel-List App](/src/images/travel-list.png)

### Sample Code: Sort Items

`
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

`
