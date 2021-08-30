import React from 'react';
import styled from 'styled-components';

import { useProfile } from '../ProfileContext';
import { IProfile } from './types/profile.model';
import { transformToLabel } from '../../utils/transformers';
import user from '../../assets/images/user.png';
import { Image, ImageWrapper } from '../common/Image/Image.component';
import { Section } from '../common/Section/Section.component';
import { breakpoints } from '../../assets/styles/variables';

export const Profile: React.FC = () => {
  const { state } = useProfile();

  return (
    <Section>
      <h2>Profile</h2>
      <ProfileSection>
        <ImageWrapper>
          <Image src={state.avatar && state.avatar.length ? state.avatar : user} alt="Avatar" />
        </ImageWrapper>
        <ProfileDetails>
          {Object.keys(state)
            .filter((key) => key !== 'avatar')
            .map((key) => (
              <ProfileRow key={key}>
                <ProfileLabel>{transformToLabel(key)}</ProfileLabel>
                <ProfileData>{state[key as keyof IProfile]}</ProfileData>
              </ProfileRow>
            ))}
        </ProfileDetails>
      </ProfileSection>
    </Section>
  );
};

const ProfileSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  @media only screen and (min-width: ${breakpoints.md}) {
    flex-direction: row;
  }
`;

const ProfileDetails = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  @media only screen and (min-width: ${breakpoints.md}) {
    margin-top: 0;
    margin-left: 20px;
  }
`;

const ProfileRow = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 5px;
`;

const ProfileLabel = styled.label`
  margin-right: 10px;
  width: 100px;
  font-weight: 600;
  line-height: 22px;
`;

const ProfileData = styled.p`
  margin: 0;
  line-height: 22px;
`;
