import React from "react";
import "./styles/style.scss";
import HeaderContainer from "./components/header/HeaderContainer";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Sign from "./components/sign/Sign";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import PersonalityContainer from "./components/personality/PersonalityContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/profile/profileContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <HeaderContainer />
        <div className="app_wrapper_name">
          <Route exact path="/main" render={() => <Main />} />
          <Route exact path="/sign" render={() => <Sign />} />
          <Route
            exact
            path="/Personality"
            render={() => <PersonalityContainer />}
          />
          <Route exact path="/Users" render={() => <UsersContainer />} />
          <Route
            exact
            path="/profile/:userId?"
            render={() => <ProfileContainer />}
          />
          <Route exact path="/login" render={() => <UsersContainer />} />

          <Redirect from="/" to="/main" />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
