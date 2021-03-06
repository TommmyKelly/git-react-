import React, { useReducer } from 'react';
import AlertContext from './alertContext';
import alertReducer from './alertReducer';
import {
  
    SET_ALERT,
    REMOVE_ALERT

} from '../types';


const Alertstate = props => {
    const initialState = null
    const [state, dispatch] = useReducer(alertReducer, initialState,);

    //Set alert

    const setAlert = (msg, type) => {
        dispatch({
            type: SET_ALERT,
            payload: { msg, type }
        });

        setTimeout( () => dispatch({type: REMOVE_ALERT}),3000)
      
      }

    return <AlertContext.Provider value={{
        alert: state,
        setAlert,
        
       

    }}>

    {props.children}
    </AlertContext.Provider>
}

export default Alertstate