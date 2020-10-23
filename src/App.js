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

const [users,setUsers] = useState([])
const [user,setUser] = useState({})
const [repos,setRepos] = useState([])
const [loading,setLoading] = useState(false)
const [alert,setAlert] = useState(null)

  

  // async componentDidMount(){

    

  //     this.setState({loading: true})

  //     const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //     console.log(res.data.items)
  //     this.setState({users: res.data.items, loading: false})
  // }

  const searchUsers = async (text) =>{
    setLoading(true)
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      console.log(res.data.items)
      setUsers(res.data.items)
      setLoading(false)
      setAlert(null)
  }

  //search for single user
 const getUser = async (username) =>{

    setLoading(true)
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      console.log(res.data.items)
      setUser(res.data)
      setLoading(false)
      setAlert(null)

  }

  // Get user repos
  const getUserRepos = async (username) =>{

    setLoading(true)
        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      console.log(res.data.items)
      setRepos(res.data)
      setLoading(false)
      setAlert(null)

  }

  //clear users from state

 const clearUsers = () =>{
    setUsers([])
    setLoading(false)
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
              <Search searchUsers={searchUsers} clearUsers={clearUsers} showClear={ users.length > 0 ? true : false} setAlerts={setAlerts}/> 
              <Users loading={loading} users={users}/> 
            </Fragment>
          )} />
         <Route exact path="/about" component={About}/> 
         <Route  exact path="/user/:login" render={props => (
           <User { ...props } getUser={getUser} getUserRepos={getUserRepos} repos={repos} user={user} loading={ loading }/>
         )}/>
        </Switch>
        

        
        </div>
        
      </div>
      </Router>
      </Githubstate>
    );
  
  
}

export default App;
