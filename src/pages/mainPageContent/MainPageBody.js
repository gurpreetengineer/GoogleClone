import React from 'react';
import styled from 'styled-components';
import GoogleLogo from '../../assets/Google_logo.svg';
import SearchBar from '../../components/SearchBar';

function MainPageBody() {
	return (
		<MainPageBodyContainer>
			<MainPageBodyImage src={GoogleLogo} />
			<SearchBar buttonsViewable/>
		</MainPageBodyContainer>
	);
}

const MainPageBodyContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin-top: 10%;
`;
const MainPageBodyImage = styled.img`
  object-fit: contain;
  height: 100px;
  margin-bottom: 40px;
`;

export default MainPageBody;
