import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const SearchResult = ({ link, displayLink, title, snippet, displayImage }) => {
	// console.log("displayImage", displayImage);
	return (
		<SearchResultContainer>
			<SearchResultLinkContainer>
				{displayImage && (<SearchResultSnippetImage src={displayImage ? displayImage[0].src : ''} />)}
				<SearchResultLink href={link}>
					{displayLink}
				</SearchResultLink>
			</SearchResultLinkContainer>
			<SearchResultTitleContainer>
				<SearchResultTitle href={link}>{title}</SearchResultTitle>
			</SearchResultTitleContainer>

			<SearchResultSnippetContainer>
				<SearchResultSnippet>{snippet}</SearchResultSnippet>
			</SearchResultSnippetContainer>
		</SearchResultContainer>
	);
};

SearchResult.defaultProps = {
	link: '', 
	displayLink: '',
	title: '',
	snippet: '',
	displayImage: ''
};

SearchResult.propTypes = {
	link: propTypes.string, 
	displayLink: propTypes.string,
	title: propTypes.string,
	snippet: propTypes.string,
	displayImage: propTypes.array,
};

const SearchResultContainer = styled.div`
  width: 600px;
  margin-top: 0;
  margin-bottom: 30px;
`;

const SearchResultLink = styled.a`
  text-decoration: none;
  color: #202124;
`;
const SearchResultLinkContainer = styled.div`
  padding-bottom: 6px;
  padding-top: 1px;
  font-size: 14px;
	display: flex;
	align-items: center;
`;

const SearchResultTitleContainer = styled.div`
  font-size: 23px;
  // text-decoration: none;
`;

const SearchResultTitle = styled.a`
  text-decoration: none;
  color: #1a0dab;
	font-weight: 400;
    font-size: 20px;
`;

const SearchResultSnippetContainer = styled.div`
  font-size: 14px;
  // text-decoration: none;
`;

const SearchResultSnippet = styled.a`
  text-decoration: none;
  color: #202124;
`;
const SearchResultSnippetImage = styled.img`
	width: 25px;
	height: 22px;
	margin-right: 7px;
	object-fit: contain; // This property gives balance ratio to width and height simultaneously.
`;


export default SearchResult;
