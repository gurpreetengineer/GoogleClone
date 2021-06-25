import React from 'react';
import Header from './mainPageContent/Header';
import MainPageBody from './mainPageContent/MainPageBody';
import styled from 'styled-components';

function MainPage() {

	return (
		<MainPageContainer>
			<Header isheaderFilterWorking/>
			<MainPageBody />
		</MainPageContainer>
	);
}

const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: scroll; 

	&::-webkit-scrollbar{
		display: none;
	}
`;

export default MainPage;
