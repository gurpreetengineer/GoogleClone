import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import searchLogo from '../../assets/Search_logo.svg';
import newsLogo from '../../assets/News_logo.svg';
import imagesLogo from '../../assets/Images_logo.svg';
import mapsLogo from '../../assets/Maps_logo.svg';
import videosLogo from '../../assets/Videos_logo.svg';
import moreLogo from '../../assets/More_logo.svg';


function LowerHeader() {
	// const match = useRouteMatch();
	// <LowerHeaderTabletContainer to={`${match.url}/all`} >

	return (
		<LowerHeaderContainer>
			<LowerHeaderLeftContainer>
				<LowerHeaderTabletContainer to="/all">
					<LowerHeaderTabletIcon src={searchLogo} />
					<LowerHeaderTabletName> All </LowerHeaderTabletName>
				</LowerHeaderTabletContainer>
				<LowerHeaderTabletContainer to="/news">
					<LowerHeaderTabletIcon src={newsLogo} />
					<LowerHeaderTabletName> News </LowerHeaderTabletName>
				</LowerHeaderTabletContainer>
				<LowerHeaderTabletContainer to="/image">
					<LowerHeaderTabletIcon src={imagesLogo} />
					<LowerHeaderTabletName> Images </LowerHeaderTabletName>
				</LowerHeaderTabletContainer>
				<LowerHeaderTabletContainer to="/maps">
					<LowerHeaderTabletIcon src={mapsLogo} />
					<LowerHeaderTabletName> Maps </LowerHeaderTabletName>
				</LowerHeaderTabletContainer>
				<LowerHeaderTabletContainer to="/videos">
					<LowerHeaderTabletIcon src={videosLogo} />
					<LowerHeaderTabletName> Videos </LowerHeaderTabletName>
				</LowerHeaderTabletContainer>
				<LowerHeaderTabletContainer to="/more">
					<LowerHeaderTabletIcon src={moreLogo} />
					<LowerHeaderTabletName> More </LowerHeaderTabletName>
				</LowerHeaderTabletContainer>
			</LowerHeaderLeftContainer>
			<LowerHeaderRightContainer>
				<LowerHeaderTabletRight>
					<LowerHeaderTabletName> Settings </LowerHeaderTabletName>
					<LowerHeaderTabletButton> Todos </LowerHeaderTabletButton>
				</LowerHeaderTabletRight>
			</LowerHeaderRightContainer>
		</LowerHeaderContainer>
	);
}

const LowerHeaderContainer = styled.div`
  display: flex;
  margin-top: 27px;
  // width: 500px;
  justify-content: space-between;

`;

const LowerHeaderTabletContainer = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const LowerHeaderTabletRight = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }
`;

const LowerHeaderTabletIcon = styled.img`
  padding: 0px 5px 0px 14px;
  height: 16px;
  width: 16px;
  
`;
const LowerHeaderTabletName = styled.div`
  font-size: 14px;
  color: #685f5f;
`;

const LowerHeaderTabletButton = styled.button`
  font-size: 14px;
  border: 1px solid transparent;
  background-color: transparent;
  margin: 0 14px;
  padding: 6px 8px;
  color: #685f5f;

  &:hover {
    cursor: pointer;
    background-color: #d4d4d47a;
    border: 1px solid #d4d4d4cc;
    color: rgba(0, 0, 0, 0.87);
  }
`;

const LowerHeaderLeftContainer = styled.div`
display: flex;
`;
const LowerHeaderRightContainer = styled.div`
display: flex;
`;

export default LowerHeader;
