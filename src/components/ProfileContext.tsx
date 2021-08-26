import React, { Dispatch } from 'react';

import { IProfile } from './profile/types/profile.model';

const initialValue: IProfile = sessionStorage.getItem('profile')
  ? JSON.parse(sessionStorage.getItem('profile') ?? '')
  : {};

const ProfileContext = React.createContext<{
  state: IProfile;
  dispatch: Dispatch<any>;
}>({
  state: initialValue,
  dispatch: () => null,
});

interface IAction {
  type: string;
  state: IProfile;
}

function profileReducer(state = initialValue, action: IAction) {
  switch (action.type) {
    case 'setProfile': {
      sessionStorage.setItem('profile', JSON.stringify(action.state));
      return action.state;
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ProfileProvider({ children }: any) {
  const [state, dispatch] = React.useReducer(profileReducer, initialValue);
  const value = { state, dispatch };
  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

function useProfile() {
  const context = React.useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}

export { ProfileProvider, useProfile };
