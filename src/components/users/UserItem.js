import React  from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'


 const UserItem = ({user: {avatar_url, login, html_url}}) => {
   
    // state ={
    //         id:'id',
    //         login: 'Tommy',
    //         avatar_url: 'https://avatars2.githubusercontent.com/u/59783928?s=64&v=4',
    //         html_url: 'https://github.com/octocat'
    //     }
    

    
      //const  { avatar_url, login, html_url } = props.user
        return (
            <div className='card text-center'>
               <img src={avatar_url} alt="" className="round-img" style={{ width: '60px'}}/>
                <h3>{ login }</h3>
                <div>
                    <Link to={ `/user/${login}` }  rel="noopener noreferrer" className="btn btn-dark btn-sm my-1">Link</Link>
                </div>
              
            </div>
        )
    
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
