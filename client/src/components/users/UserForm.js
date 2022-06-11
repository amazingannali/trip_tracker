import { useState, useEffect } from 'react';

const UserForm = ({ addUser, id, setEdit, email, password, updateUser }) => {
  const [User, setUser] = useState({ title: '', password: '' })

  
  useEffect( () => {
    if (id) {
      // setUser({ title: title })
      setUser({ title })
      // ?????????????????????????
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault() 
      // edit
      updateUser(id, User) 
      setEdit(false) // close the form
    } else {
      // add
  
      addUser(User) // call the add function with what i have in state 
    }
    // clear out the form
    setUser({ title: '' })
  }

  return (
    <>
      <h1>{ id ? 'Edit' : 'Add' } User</h1>
      <form onUsermit={handleSubmit}>
        <label>email:</label>
        <input 
          // required for inputs 
          name='email' 
          value={user.email}
          // save what the user types to the state
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          // optional 
          required
          placeholder='email'
        />
         <label>password:</label>
        <input 
          // required for inputs 
          name='tpassword' 
          value={user.password}
          // save what the user types to the state
          onChange={(e) => setUser({ ...user, tpassword: e.target.value })}
          // optional 
          required
          placeholder='password'
        />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default UserForm;