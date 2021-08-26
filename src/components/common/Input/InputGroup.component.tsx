import styled from 'styled-components';

import { colors } from '../../../assets/styles/variables';

interface IGroupProps {
  isValid?: boolean;
}

export const Group = styled.div<IGroupProps>`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
  display: flex;
  border: 1px solid ${colors.grey};
  border-radius: 3px;
  background-color: ${colors.white};

  ${({ isValid }: any) =>
    isValid &&
    `
    border-color: red;
  `}
`;

export const Input = styled.input`
  border: 0;
  color: ${colors.greyDark};
  background-color: transparent;
  outline: 0;
  width: 100%;
  line-height: 1.25;
  padding: 30px 16px 10px 16px;

  &::-webkit-input-placeholder {
    opacity: 0;
    transition: inherit;
  }
`;

export const Required = styled.span`
  color: ${colors.orange};
  margin-left: 2px;
`;

export const Error = styled.p`
  position: absolute;
  bottom: -15px;
  width: 100%;
  font-size: 0.6rem;
  color: red;
`;
export const FileGroup = styled.div`
  position: relative;
  margin-right: 20px;
`;

export const File = styled.input`
  display: none;
`;

export const Label = styled.label`
  position: absolute;
  font-size: 1rem;
  padding: 20px 16px;
  margin-bottom: 0;
  color: ${colors.greyMedium};
  transition: all 0.1s ease-in-out;
  display: inline-block;

  ${Input}:focus ~ & {
    padding-top: 10px;
    padding-bottom: 0;
    font-size: 75%;
    line-height: 16px;
    color: ${colors.greyMedium};
  }
  ${Input}:not(:placeholder-shown) ~ & {
    padding-top: 10px;
    padding-bottom: 0;
    font-size: 75%;
    line-height: 16px;
    color: ${colors.greyMedium};
  }
`;
