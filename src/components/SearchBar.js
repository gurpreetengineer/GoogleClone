/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable react/no-unescaped-entities */

import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import propTypes from 'prop-types';
import { useStateContext } from '../manageContext/ContextAPI';
import { actionTypes } from '../manageContext/reducer';

import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';

function SearchBar({ buttonsViewable }) {
	const history = useHistory();
	const [{ searchTerm }, dispatch] = useStateContext();

	const [stateSearchTerm, setStateSearchTerm] = useState(searchTerm);

	const searchField = useRef(null);
	const [searchBarInput, setSearchBarInput] = useState('');

	const handleSearch = event => {
		event.preventDefault();

		if (searchBarInput === '') {
			searchField.current.focus();
		} else {
			dispatch({
				type: actionTypes.SET_SEARCH_TERM,
				searchTerm: searchBarInput,
			});
			history.push('/search');
		}
	};

	return (
		<SearchBarContainer>
			<SearchBarInputContainer>
				<SearchBarSearchIcon />
				<SearchBarInput ref={searchField} type='text' value={stateSearchTerm || ''} onChange={event => {
					setSearchBarInput(event.target.value);
					setStateSearchTerm(event.target.value);
				}} />
				<SearchBarMicIcon />
			</SearchBarInputContainer>
			{buttonsViewable ?
				(
					<SearchBarButtonContainer>
						<SearchBarButton type='submit' onClick={event => handleSearch(event)}>Google Search</SearchBarButton>
						<SearchBarButton>I'm Feeling Lucky</SearchBarButton>
					</SearchBarButtonContainer>
				) : (
					<input type='submit' onClick={event => handleSearch(event)} style={{display:'none'}} value=""/>
				)
			}
		</SearchBarContainer>
	);
}

SearchBar.defaultProps = {
	buttonsViewable: false,
};

SearchBar.propTypes = {
	buttonsViewable: propTypes.bool,
};

const SearchBarContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const SearchBarInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #dfe1e5;
  border-radius: 7vh;
  min-width: 560px;
  width: 31vw;
  min-height: 44px; 
  max-height: 5vh;
  margin: 0 auto;

  // margin-top: 40px;
  // margin-top: 4.8vh;
  justify-content: space-between;

  &:hover {
    border-color: rgba(223,225,229,0);
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  }  
`;
const SearchBarSearchIcon = styled(SearchIcon)`
  padding-right: 16px;
  padding: 8px 13px 7px 14px;
  color: #9aa0a6;
`;
const SearchBarMicIcon = styled(MicIcon)`
padding: 8px 13px 7px 14px;
`;
const SearchBarInput = styled.input`
  width: 89%;
  height: 4vh;
  border: none;
  color: rgba(0, 0, 0, 0.87);
  font-size: 16px;
  &:focus {
    outline: none;
  }
  // &:focus > $ {SearchBarInputContainer} {
  //   border-color: rgba(223,225,229,0);
  //   box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
  // }
`;

const SearchBarButtonContainer = styled.div`
  width: 100%;
  margin-top: 30px;
  border: none;

  background-color: transparent;
  display: flex;
  justify-content: center;
`;
const SearchBarButton = styled.button`
  padding: 0px 21px;
  background-color: #f8f9fa;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  height: 36px;
  color: #3C4043;
  padding: 7px 15px;
  margin: 15px;
  text-transform: inherit;

  &:hover {
    border-color: rgba(223,225,229,0);
    box-shadow: 0 1px 6px rgb(32 33 36 / 28%);
    color: #222;
    cursor: pointer;
  }
`;

export default SearchBar;
