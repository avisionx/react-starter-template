import React from 'react';
import { HashRouter as DefaultRouter, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <DefaultRouter>
      <Switch>
        <Route
          exact
          path="/"
          component={() => {
            return <>Hello World!</>;
          }}
        />
      </Switch>
    </DefaultRouter>
  );
};

export default App;
