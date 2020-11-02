import React, { useState, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import './App.css';
import Users from './components/users/Users'
import User from './components/users/User'
import axios from 'axios'
import Search from './components/users/Search';
import Alert from './components/layout/Alert'
import About from './components/pages/About';
import GithubContext from './context/github/githubContext'
import Githubstate from './context/github/GithubState';

const App = () => {



const [repos,setRepos] = useState([])
const [loading,setLoading] = useState(false)
const [alert,setAlert] = useState(null)

  

  // async componentDidMount(){

    

  //     this.setState({loading: true})

  //     const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //     console.log(res.data.items)
  //     this.setState({users: res.data.items, loading: false})
  // }

  
 

  // Get user repos
  const getUserRepos = async (username) =>{

    setLoading(true)
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      console.log(res.data.items)
      setRepos(res.data)
      setLoading(false)
      setAlert(null)

  }

 

  const setAlerts = (msg, type) => {
    setAlert(
      {
        msg: msg,
        type: type
      }
    )
    setTimeout( () => setAlert(null),3000)
  
  }

  
   //const { users, user, repos, loading,alert } = this.state
    return (
      <Githubstate>
      <Router>

      <div className="App">
        <Navbar title={'Github Profile Finder'}/>
        <div className="container">
        <Alert alert={alert}/>
        <Switch>
          <Route exact path='/' render={props => (
            <Fragment>
              <Search  setAlerts={setAlerts}/> 
              <Users /> 
            </Fragment>
          )} />
         <Route exact path="/about" component={About}/> 
         <Route  exact path="/user/:login" render={props => (
           <User { ...props }  getUserRepos={getUserRepos} repos={repos}  />
         )}/>
        </Switch>
        

        
        </div>
        
      </div>
      </Router>
      </Githubstate>
    );
  
  
}

export default App;
