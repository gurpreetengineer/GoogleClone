import React, { createContext, useContext, useReducer } from 'react';
import propTypes from 'prop-types';

const StateContext = createContext();

const ContextProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
);

const useStateContext = () => useContext(StateContext);

ContextProvider.propTypes = {
	initialState: propTypes.object,
	reducer: propTypes.func,  
	children: propTypes.node
};
/* 
** For Children propTypes, refer: 
** https://stackoverflow.com/questions/42122522/reactjs-what-should-the-proptypes-be-for-this-props-children
*/
export { StateContext, useStateContext, ContextProvider };
