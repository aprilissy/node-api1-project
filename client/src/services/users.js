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