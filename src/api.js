import axios from 'axios';

const searchImages = async searchItem => {
	const response = await axios.get('https://api.unsplash.com/search/photos', {
		headers: {
			Authorization: 'Client-ID G11BmzM1PKYefHEU4-x4vdzHYylAHyHje9Q82agmB2Q',
		},
		params: {
			query: searchItem,
		},
	});

	return response.data.results;
};

export default searchImages;
