import React, { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
    SET_ALERT,
    REMOVE_ALERT

} from '../types';


const Githubstate = props => {
    const initialState = {
        users: [],
        user:{}  ,
        repos:[],
        loading: false,
        alert: null
    }
    const [state, dispatch] = useReducer(GithubReducer, initialState,);

    //Search User

    //Get User

    //Get repos

    //clear Users

    //set loading

    return <GithubContext.Provider value={{
        users: state.users,
        user: state.user,
        repos:state.repos,
        loading:state.loading
    }}>

    {props.children}
    </GithubContext.Provider>
}

export default Githubstate