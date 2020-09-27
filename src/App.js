import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import Users from './user/Users';
import Admin from './admin/Admin';
import Dashboard from './user/dashboard/Dashboard';
import './App.css';
import Shop from './user/shop/Shop';


function App() {

  const [authentificate, setAuthentificate] = useState(false);

  return (
    <Router> 
   
     <main>
      <Switch>
      <Route path="/" exact>
         <Users />
      </Route> 
      <Route path="/dashboard" exact>
       <Dashboard />
      </Route> 
      <Route path="/shop" exact>
        <Shop />
      </Route> 
      <Redirect to="/" />
      </Switch>
    </main> 
  </Router>
  );
}

export default App;
