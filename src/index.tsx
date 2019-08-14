import React from 'react';
import ReactDOM from 'react-dom';
import './static/css/main.scss';
import App from './App';
import About from './components/About';
import Resume from './components/Resume';
import NotFound from './components/NotFound'
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

ReactDOM.render(
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route component={NotFound} status={404} 
        />
      </Switch>
    </Router>,
    document.getElementById('root'),
  );
  
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
