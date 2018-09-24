import React from 'react';
import Contacts from '../Contacts/Contacts';
import Home from '../Home/Home';
import Gallery from '../Gallery/Gallery';
import { Switch, Route } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return (
      <div className="content">
        <Switch>
          <Route exact path='/home' component={ Home }/>
          <Route exact path='/contacts' component={ Contacts }/>
          <Route exact path='/gallery' component={ Gallery }/>
        </Switch>
      </div>
    );
  }
}

export default Main;
