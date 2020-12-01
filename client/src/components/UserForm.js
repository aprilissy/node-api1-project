import React, { useRef } from 'react'
import { addUser } from '../services/users'

const UserForm = (params) =>{
  const nameRef = useRef()
  const bioRef = useRef()
  // const user = {
  //   name:nameRef.current.value,
  //   bio:bioRef.current.value
  // }

  const onSubmit = e => {
    //e.preventDefault()
    const func = async () => { 
      await addUser({
        name:nameRef.current.value,
        bio:bioRef.current.value
      })
      // params.setUsersList(
      //   [...params.usersList, 
      //     {name:nameRef.current.value,
      //       bio:bioRef.current.value}
      //   ]
      // )
    }
    func()
  }



  return (
    <div className='userForm'>
      <form onSubmit={onSubmit}>
        <button>Add User</button>
        <fieldset>
          <legend>Name</legend>
          <input 
            type='text'
            name='name'
            ref={nameRef}
          />
        </fieldset>
        <fieldset>
          <legend>Bio</legend>
          <input 
            type='text'
            name='bio'
            ref={bioRef}
          />
        </fieldset>
      </form>
    </div>
  )
}
export default UserForm