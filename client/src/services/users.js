import axios from 'axios'

export const getUsers = () => {
  return new Promise(resolve => {  
    axios
      .get('http://localhost:5000/api/users')
      .then(res => resolve(res.data))
      .catch(err => {
        console.log('Error Getting Users List:', err.response)
        resolve()
      })
  })
}

export const addUser = (user) => {
  return new Promise(resolve => {
    axios
      .post('http://localhost:5000/api/users', user)
      .then(res => resolve(res.data))
      .catch(err => {
        console.log('Error Adding New User', err.response)
        resolve()
      })
  })
}