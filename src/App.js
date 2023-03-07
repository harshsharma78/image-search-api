// Used Axios Library in this for making API requests
import { useState } from 'react';
import SearchBar from './components/SearchBar';
import searchImages from './api';
import ImageList from './components/ImageList';

function App() {
	const [images, setImages] = useState([]);
	const handleSubmit = async searchItem => {
		const result = await searchImages(searchItem);
		setImages(result);
	};
	return (
		<div>
			<SearchBar onSubmit={handleSubmit} />
			<ImageList images={images} />
		</div>
	);
}

export default App;
