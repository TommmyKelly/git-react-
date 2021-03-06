import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import './App.css';
import User from './components/users/User'
import Alert from './components/layout/Alert'
import About from './components/pages/About';
import Githubstate from './context/github/GithubState';
import Alertstate from './context/alert/AlertState';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';

const App = () => {

    return (
      <Githubstate>
        <Alertstate>
      <Router>

      <div className="App">
        <Navbar title={'Github Profile Finder'}/>
        <div className="container">
        <Alert />
        <Switch>
          <Route exact path='/' component={Home} />
         <Route exact path="/about" component={About}/> 
         <Route  exact path="/user/:login" component={User} />
         <Route component={NotFound} />
        </Switch>
        

        
        </div>
        
      </div>
      </Router>
      </Alertstate>
      </Githubstate>
    );
  
  
}

export default App;
