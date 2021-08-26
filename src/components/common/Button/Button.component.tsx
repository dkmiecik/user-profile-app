import styled from 'styled-components';

import { colors } from '../../../assets/styles/variables';

export const Button = styled.button`
  width: 100%;
  max-width: 204px;
  cursor: pointer;
  background: ${colors.orange};
  border-color: ${colors.orange};
  padding: 0.667em 1.5rem;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  color: ${colors.white};
  border-radius: 3px;
  text-decoration: none;
  border: 1px solid transparent;
  margin-left: 10px;
  &:hover {
    background: ${colors.orangeMedium};
    border-color: ${colors.orangeMedium};
    box-shadow: 0 5px 20px rgba(240, 128, 0, 0.15);
  }
  &:disabled {
    box-shadow: none;
    background-color: ${colors.greyWhite};
    color: ${colors.grey};
    border-color: ${colors.grey};
  }
`;

export const ButtonSecondary = styled.button`
  width: 100%;
  max-width: 204px;
  cursor: pointer;
  background: ${colors.white};
  padding: 0.667em 1.5rem;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  color: ${colors.orange};
  border-radius: 3px;
  text-decoration: none;
  border: 1px solid ${colors.orange};
  margin-left: 10px;
  &:hover {
    color: ${colors.white};
    background: ${colors.orangeMedium};
    border-color: ${colors.orangeMedium};
    box-shadow: 0 5px 20px rgba(240, 128, 0, 0.15);
  }
  &:disabled {
    box-shadow: none;
    background-color: ${colors.greyWhite};
    color: ${colors.grey};
    border-color: ${colors.grey};
  }
`;

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;
`;
