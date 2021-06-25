/* eslint-disable no-mixed-spaces-and-tabs */
import React, { Fragment } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import propTypes from 'prop-types';

function Header({ isheaderFilterWorking }) {
	return (
		<HeaderContainer>
			{isheaderFilterWorking &&
        <HeaderLeftHeader>
        	<HeaderLink to="/about">About</HeaderLink>
        	<HeaderLink to="/store">Store</HeaderLink>
        </HeaderLeftHeader>
			}
			<HeaderRightHeader>
				{isheaderFilterWorking && (
					<Fragment>
						<HeaderLink to="/gmail">Gmail</HeaderLink>
						<HeaderLink to="/images">Images</HeaderLink>
					</Fragment>
				)
				}
				<HeaderAppsIcon />
				<HeaderAvatar />
			</HeaderRightHeader>
		</HeaderContainer>
	);
}

Header.defaultProps = {
	isheaderFilterWorking: false,
};
Header.propTypes = {
	isheaderFilterWorking: propTypes.bool
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 30px;
  align-items: center;
`;

const HeaderLeftHeader = styled.div``;

const HeaderRightHeader = styled.div`
  display: flex;
  // min-width: 13vh;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLink = styled(Link)`
  text-decoration: inherit;
  margin-right: 20px;
  color: rgba(0, 0, 0, 0.87);
  font-size: 13px;

  &:hover {
    text-decoration: underline;
  }
`;

const HeaderAppsIcon = styled(AppsIcon)`
  margin-right: 20px;
`;
const HeaderAvatar = styled(Avatar)`
  // margin-right: 10px;
  height: 37px !important;
  width: 37px !important;
`;

export default Header;
