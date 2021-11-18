import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './assets/styles/reset.css';
import './assets/styles/pattern.css';
import App from './App';

import Painel from './Pages/painel';
import Sexta09 from './Pages/09072021';
import Sexta23 from './Pages/23072021';
import Sexta2309 from './Pages/23092021';
import Sexta1510 from './Pages/15102021';
import Sexta1811 from './Pages/18112021';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/09072021" component={Sexta09} />
        <Route path="/23072021" component={Sexta23} />
        <Route path="/23092021" component={Sexta2309} />
        <Route path="/15102021" component={Sexta1510} />
        <Route path="/18112021" component={Sexta1811} />
        <Route path="/painel" component={Painel} />
        <Route path="/*" component={App} />
      </Switch>
    </ BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

