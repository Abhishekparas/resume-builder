import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/contact';
import Header from './Components/Header';
import Landing from './Components/Landing';
import Register from './Components/register';
import Sign from './Components/signIn';
import Template from './Components/Templates';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Landing></Landing>
        </Route>
        <Route path="/templates" exact>
          <Template></Template>
        </Route>
        <Route path="/about" exact>
          <About></About>
        </Route>
        <Route path="/register" exact>
          <Register></Register>
        </Route>
        <Route path="/signIn" exact>
          <Sign></Sign>
        </Route>
        <Route path="/contact" exact>
          <Contact></Contact>
        </Route>
      </Switch>
        
    </React.Fragment>
  );
}

export default App;