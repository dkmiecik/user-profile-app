import * as React from 'react';
import styled from 'styled-components';

import { colors } from '../../assets/styles/variables';

export const Footer = () => (
  <Content>
    <Link href="https://gorzko.dev" target="_blank" rel="noopener noreferrer">
      Powered by{' Damian Kmiecik '}
    </Link>
  </Content>
);

const Content = styled.footer`
  width: 100%;
  height: 100px;
  border-top: 1px solid ${colors.orange};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Link = styled.a`
  color: ${colors.orange};
  &:hover {
    color: ${colors.orangeMedium};
  }
`;
