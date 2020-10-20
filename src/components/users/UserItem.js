import React  from 'react'
import PropTypes from 'prop-types'


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
                    <a href={ html_url} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-sm my-1">Link</a>
                </div>
              
            </div>
        )
    
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

export default UserItem
