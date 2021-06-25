import propTypes from 'prop-types';

export const initialState = {
	searchTerm: null,
};

export const actionTypes = {
	SET_SEARCH_TERM: 'SET_SEARCH_TERM'
};

const reducer = (state, action) => {
	switch(action.type) {
	case actionTypes.SET_SEARCH_TERM:
		return {
			...state,
			searchTerm: action.searchTerm
		};
	default:
		return state;
	}
};

reducer.propTypes = {
	state: propTypes.object,
	action: propTypes.func
};

export default reducer;