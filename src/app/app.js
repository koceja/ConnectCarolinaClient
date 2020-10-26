import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'emotion-theming';
import theme from '@rebass/preset';

import Home from '../pages/home/home.js';
import Dashboard from '../pages/student-center/dashboard/dashboard.js';
import Academics from '../pages/student-center/academics/academics.js';
import Search from '../pages/student-center/academics/search/search.js';
import Financial from '../pages/student-center/financial/financial.js';
import Personal from '../pages/student-center/personal/personal.js';

import './app.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div id="app">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/student-center/dashboard">
              <Dashboard />
            </Route>
            <Route exact path="/student-center/academics">
              <Academics />
            </Route>
            <Route exact path="/student-center/academics/search">
              <Search />
            </Route>
            <Route exact path="/student-center/financial">
              <Financial />
            </Route>
            <Route exact path="/student-center/personal">
              <Personal />
            </Route>

          </Switch>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
