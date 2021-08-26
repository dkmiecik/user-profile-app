import React from 'react';
import { Redirect, Route, HashRouter } from 'react-router-dom';

// Components
import { Profile } from './components/profile/Profile.component';
import { ProfileProvider } from './components/ProfileContext';
import { FormWrapper } from './components/form/FormWrapper.component';

// Common components
import { Header } from './components/common/Header.component';
import { Nav } from './components/common/Nav.component';
import { Main } from './components/common/Main.component';
import { Footer } from './components/common/Footer.component';

const App: React.FC = () => {
  return (
    <HashRouter>
      <div>
        <Header>
          <h1>User Profile App</h1>
          <Nav />
        </Header>
        <Main>
          <ProfileProvider>
            <Route exact path="/" render={() => <Redirect to="/profile" />} />
            <Route path="/profile" component={Profile} />
            <Route path="/form" component={FormWrapper} />
          </ProfileProvider>
        </Main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
