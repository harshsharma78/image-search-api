import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSubmit }) {
	const [searchItem, setItem] = useState('');

	const handleFormSubmit = e => {
		e.preventDefault();
		onSubmit(searchItem);
	};

	const handleChange = e => {
		setItem(e.target.value);
	};
	return (
		<div className='search-bar'>
			<form onSubmit={handleFormSubmit}>
				<label>Enter Search Term</label>
				<input
					value={searchItem}
					onChange={handleChange}
				/>
			</form>
		</div>
	);
}
export default SearchBar;
