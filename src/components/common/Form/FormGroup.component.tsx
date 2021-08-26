import styled from 'styled-components';

import { breakpoints } from '../../../assets/styles/variables';

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media only screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`;

export const FormFields = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
