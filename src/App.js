import React from 'react';
import { HashRouter as DefaultRouter, Switch, Route } from "react-router-dom";


const App = () => {

  var createBrowserHistory = require("history").createBrowserHistory;
  const history = createBrowserHistory();

  return (
    <DefaultRouter history={history}>
      <Switch>
        <Route exact path="/" component={() => {return <>Hello</>}} />
      </Switch>
    </DefaultRouter>
  )
};

export default App;