import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { colors } from '../../assets/styles/variables';

export const Nav: React.FC = () => (
  <NavGroup>
    <Link
      to="/profile"
      activeStyle={{
        fontWeight: 'bold',
        color: colors.orangeMedium,
      }}
    >
      Profile
    </Link>
    <Link
      to="/form"
      activeStyle={{
        fontWeight: 'bold',
        color: colors.orangeMedium,
      }}
    >
      Form
    </Link>
  </NavGroup>
);
const NavGroup = styled.nav`
  margin-top: 10px;
`;
const Link = styled(NavLink)`
  color: ${colors.greyMedium};
  margin-left: 10px;
  outline: none;
  &:focus {
    outline: none;
  }
  &:hover {
    color: ${colors.orange};
  }
`;
