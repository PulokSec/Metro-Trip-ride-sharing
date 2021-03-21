import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import Profile from "./Components/Profile/Profile";
import SignUp from "./Components/SignUp/SignUp";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Destination from './Components/Destination/Destination';
import SearchResult from './Components/SearchField/SearchResult';
import NotFound from "./Components/NotFound/NotFound";
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
      <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
        <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/signUp">
          <SignUp/>
        </Route>
        <PrivateRoute path="/profile">
          <Profile/>
        </PrivateRoute>
        <PrivateRoute path="/destination/:title">
          <Destination/>
        </PrivateRoute>
        <PrivateRoute path="/destination">
          <Home/>
        </PrivateRoute>
        <Route exact path="/search-result/:location"><SearchResult/></Route>
        <Route path="*"><NotFound/></Route>
      </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
