import { useState, useEffect } from 'react';
import API_KEY from '../manageContext/document';
import propTypes from 'prop-types';

const CONTEXT_KEY = '68f06e53504408dea';

const useGoogleSearch = term => {
	const [searchResults, setSearchResults] = useState(null);

	// const [searchResults, setSearchResults] = useState(term);
	useEffect(() => {
		const fetchData = async () => {
			if (term !== null) {
				await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`)
					.then(response => response.json())
					.then(data =>setSearchResults(data))
					// eslint-disable-next-line no-console
					.catch(error => console.log('Error Occurred while fetching results: ', error));
			} else {
				setSearchResults(null);
			}
		};

		fetchData();
	}, [term]);
	return { searchResults };
};

useGoogleSearch.propTypes = {
	term: propTypes.string
};

export default useGoogleSearch;
