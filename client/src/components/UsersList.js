import React, { useState, useEffect } from 'react'
import { getUsers } from '../services/users'
import UserForm from '../components/UserForm'

const Users = () => {
  const [usersList, setUsersList] = useState([])

  useEffect(() => {
    const func = async () => {
      const getting = await getUsers()
      setUsersList(getting)
    }
    func()
  },[])
  console.log('usersList', usersList);
  

  return(
   <div>
      <div className='displayList'>
        { (usersList ? 
          usersList.map(user => (
            <div className='userCard' key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.bio}</p>
              <button  >Delete</button>
            </div>
          )) : `No current users` )
        }
      </div>
      <UserForm usersList={usersList} setUsersList={setUsersList}/>
   </div>
  )
}
export default Users