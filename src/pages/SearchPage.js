import React from 'react';
import styled from 'styled-components';
import SearchBar from '../components/SearchBar';
import { Link } from 'react-router-dom';
import { useStateContext } from '../manageContext/ContextAPI';
import googleLogo from '../assets/Google_logo.svg';
import SearchResult from './SearchPageContent/SearchResult';
import useGoogleSearch from '../CustomHook/useGoogleSearch';
// import TESLA_SEARCH_RESPONSE from '../TESLA_SEARCH_RESPONSE';
import Header from './mainPageContent/Header';
import LowerHeader from './SearchPageContent/LowerHeader';

function SearchPage() {
	const [{ searchTerm }] = useStateContext();

	const { searchResults } = useGoogleSearch(searchTerm);

	// Mock API
	// const searchResults = TESLA_SEARCH_RESPONSE;
	
	return (
		<SearchPageContainer>
			<SearchPageUpperHeaderParent>
				<SearchPageUpperHeaderContainer>
					<SearchPageHeaderLeft>
						<Link to="/"><GoogleImage src={googleLogo} /></Link>
						<SearchPageLowerHeaderContainer>
							<SearchBar />
							<LowerHeader />
						</SearchPageLowerHeaderContainer>
					</SearchPageHeaderLeft>
					<SearchPageHeaderRight>
						<Header />
					</SearchPageHeaderRight>
				</SearchPageUpperHeaderContainer>
			</SearchPageUpperHeaderParent>
			{searchTerm && (
				<SearchPageBody>
					<EmptyDiv></EmptyDiv>
					<ContentDiv>
						<SearchPageBodyTimeTaken>
							{searchResults !== null && searchResults.searchInformation !== null && searchResults.searchInformation.formattedTotalResults} results ({searchResults !== null && searchResults.searchInformation.formattedSearchTime}) seconds
						</SearchPageBodyTimeTaken>
						<SearchPageBodyResults>
							{searchResults && searchResults.items.map(item => (
								<SearchResult key={`${item.kind}${item.title}${item.link}`} link={item.link} displayLink={item.displayLink} title={item.title} snippet={item.snippet} displayImage={item.pagemap && item.pagemap.cse_image && item.pagemap.cse_image} ></SearchResult>
							))}
						</SearchPageBodyResults>
					</ContentDiv>
					<EndingEmptyDiv></EndingEmptyDiv>
				</SearchPageBody>
			)}
		</SearchPageContainer>
	);
}
const SearchPageContainer = styled.div`
// padding-bottom: 40px;
	// border-bottom: 1px solid #EBEBEB;
`;
const SearchPageUpperHeaderParent = styled.div`
	border-bottom: 1px solid #EBEBEB;
	margin-bottom: 14px;
	height: 150px;

	// Position: Sticky needs atleast one of the property among: Top, Bottom, Right or left so that it can know where to STICK!!!
	background-color: #FFF;
	top: 0;
	position: sticky;
`;

const SearchPageUpperHeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;	
	align-items: center;
	margin-top: -5px;
	position: sticky;
	z-index: 100;
	// border-bottom: 1px solid gray;
`;

const SearchPageLowerHeaderContainer = styled.div`
// display: flex;
// height: 8vh;
	height: 50px;
`;
const GoogleImage = styled.img`
	padding: 43px 27px;
	height: 33px;
`;
const SearchPageHeaderLeft = styled.div`
	display: flex;
	align-items: center;
`;
const SearchPageHeaderRight = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const SearchPageBody = styled.div`
	display: flex;
`;

const SearchPageBodyTimeTaken = styled.div`
	color: #70757a;
	line-height: 23px;
	font-size: 14px;
	margin-bottom: 10px;
`;

const SearchPageBodyResults = styled.div`
`;

const EmptyDiv = styled.div`
	flex: 1.2;
`;

const ContentDiv = styled.div`
	flex: 4;
`;
const EndingEmptyDiv = styled.div`
	flex: 8.4;
`;

export default SearchPage;
