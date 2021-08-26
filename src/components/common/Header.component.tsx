import styled from 'styled-components';

import { colors } from '../../assets/styles/variables';

export const Header = styled.header`
  background-color: ${colors.greyWhite};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 5px 0;
  border-bottom: 1px solid ${colors.orange};
`;
