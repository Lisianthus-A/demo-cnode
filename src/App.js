import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import Header from './component/Header';
import Main from './component/Main';
import Post from './component/Post';
import User from './component/User';

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <Header />
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/post' component={() => <Redirect to='/' />} />
          <Route exact path='/user' component={() => <Redirect to='/' />} />
          <Route path='/post/:id' component={Post} />
          <Route path='/user/:name' component={User} />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;