import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './assets/styles/reset.css';
import './assets/styles/pattern.css';
import App from './App';

import Sexta09 from './Pages/09072021';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/09072021" component={Sexta09} />
        <Route path="/*" component={App} />
      </Switch>
    </ BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

