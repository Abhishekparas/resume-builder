import React from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './Components/About';
import Contact from './Components/contact';
import Education from './Components/education';
import Finalize from './Components/finalize';
import Header from './Components/Header';
import Landing from './Components/Landing';
import Register from './Components/register';
import Sign from './Components/signIn';
import Skin4 from './Components/skins/skin4';
import Template from './Components/Templates';
import Skin2  from './Components/skins/skin2';
import Skin1 from './Components/skins/skin1';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/templates" exact component={Template}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/register" exact component={Register}></Route>
        <Route path="/signIn" exact component={Sign}></Route>
        <Route path="/contact" exact component={Contact}></Route>
        <Route path="/education" exact component={Education}></Route>
        <Route path="/finalize" exact>
          <Finalize></Finalize>
        </Route>
        <Route path="/skin" exact>
          <Skin1></Skin1> 
        </Route>
      </Switch>

    </React.Fragment>
  );
}

export default App;