import React from 'react';
import Eshop from './components/Eshop';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './style/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import View from './site/View';


function App() {
  return (
    <>

      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={View} />
            <Route path='/eshop' component={Eshop} />
          </Switch>
        </div>
      </Router>

    </>
  );
}

export default App;
