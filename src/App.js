import React from 'react';
import { HashRouter as DefaultRouter, Switch, Route } from "react-router-dom";

import WakaTimeMonthlyLogs from './components/WakaTimeMonthlyLogs'

const App = () => {

  var createBrowserHistory = require("history").createBrowserHistory;
  const history = createBrowserHistory();

  return (
    <DefaultRouter history={history}>
      <Switch>
        <Route exact path="/wakatime-monthly/" component={WakaTimeMonthlyLogs} />
      </Switch>
    </DefaultRouter>
  )
};

export default App;