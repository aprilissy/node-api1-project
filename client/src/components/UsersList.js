import React, { useState, useEffect } from 'react'
import { getUsers } from '../services/users'

const Users = () => {
  const [usersList, setUsersList] = useState([])

  useEffect(() => {
    const func = async () => {
      const getting = await getUsers()
      setUsersList(getting)
    }
    func()
  },[])
  console.log('userList',usersList);
  
  
  return(
 <div>
      <div>
        { (usersList.name ? 
          usersList.map(user => (
            <div className='userCard'>
              <h2>{user.name}</h2>
              <p>{user.bio}</p>
            </div>
          )) : `No current users` )
        }
      </div>
 </div>
  )
}

export default Users