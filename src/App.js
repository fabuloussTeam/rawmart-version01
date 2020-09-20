import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/Users';
import Admin from './admin/Admin';
import Buyer from '../src/user/buyer/Buyer'
import { MainNavigation, SignInSignUpNavigation } from './shared/components/Navigation/MainNavigation';
import './App.css';


function App() {

  const [authentificate, setAuthentificate] = useState(false);

  return (
    <Router> 
     { authentificate ? <MainNavigation /> : null }
     <main>
      <Switch>
      <Route path="/" exact>
         <Users />
      </Route> 
      <Route path="/buyer" exact>
       <Buyer />
      </Route> 
      <Route path="/admin" exact>
        <Admin />
      </Route> 
      <Redirect to="/" />
      </Switch>
    </main> 
  </Router>
  );
}

export default App;
