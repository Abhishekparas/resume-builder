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
import { connect } from 'react-redux';
import Test from './Components/test';


function App(props) {
  let {auth} = props;
  return (
    <React.Fragment>
      <Header />
      <Switch>
        <Route path="/" exact component={Landing}></Route>
        <Route path="/templates" exact component={auth.uid ? Template : Sign}></Route>
        <Route path="/about" exact component={About}></Route>
        <Route path="/register" exact component={auth.uid ? Landing : Register}></Route>
        <Route path="/signIn" exact component={auth.uid ? Landing: Sign}></Route>
        <Route path="/contact" exact component={auth.uid ? Contact : Sign}></Route>
        <Route path="/education" exact component={auth.uid ? Education : Sign}></Route>
        <Route path="/finalize" exact component={auth.uid ? Finalize : Sign}></Route>
        {/* <Route path="/skin" exact>
          <Skin1></Skin1> 
        </Route> */}
        <Route path="/test" exact component={Test}></Route>
      </Switch>

    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(App);