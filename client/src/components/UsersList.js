import React, { useState, useEffect } from 'react'
import { getUsers, deleteUser } from '../services/users'
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

  const clickDelete = async id => {
    const deleting = await deleteUser(id)
    console.log('deleting',deleting);
    const remaining = usersList.filter(u => u.id !== id)
    setUsersList(remaining)
    
  }
  
  return(
   <div>
      <div className='displayList'>
        { (usersList ? 
          usersList.map(user => (
            <div className='userCard' key={user.id}>
              <h2>{user.name}</h2>
              <p>{user.bio}</p>
              <button onClick={e => {
          e.stopPropagation()
          clickDelete(user.id)
        }} >Delete</button>
            </div>
          )) : `No current users` )
        }
      </div>
      <UserForm usersList={usersList} setUsersList={setUsersList}/>
   </div>
  )
}
export default Users