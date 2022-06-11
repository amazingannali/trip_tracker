import { useState } from 'react';
import UserForm from './UserForm';
import Topics from '../topics/Topics';
import { Link } from 'react-router-dom';

const User = ({ id, title, updateUser, deleteUser }) => {
  const [editing, setEdit] = useState(false)

  return (
    <>
      <h1>User# {id} email: {email}</h1>
      <h1>User# {id} password: {password}</h1>
      { editing ?
        <>
          <UserForm 
            id={id}
            email={email}
            password={password}
            updateUser={updateUser}
            setEdit={setEdit}
          />
          <button onClick={() => setEdit(false)}>Cancel</button>
        </>
        :
        <>
          <button onClick={() => setEdit(true)}>Edit</button>
          <button onClick={() => deleteUser(id)}>Delete</button>
        
        </>
      }
    </>
  )
}
