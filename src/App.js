import React from "react";
import "./styles/style.scss";
import HeaderContainer from "./components/header/HeaderContainer";
import Main from "./components/main/Main";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import PersonalityContainer from "./components/personality/PersonalityContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/profileContainer";
import LoginPage from "./components/Login/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <HeaderContainer />
        <div className="app_wrapper_name">
          <Switch>
            <Route exact path="/main" render={() => <Main />} />
            <Route exact path="/personality" render={() => <PersonalityContainer />} />
            <Route exact path="/users" render={() => <UsersContainer />} />
            <Route exact path="/profile/:userId?" render={() => <ProfileContainer />} />
            <Route exact path="/login" render={() => <LoginPage />} />
            <Redirect from="/" to="/main" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
