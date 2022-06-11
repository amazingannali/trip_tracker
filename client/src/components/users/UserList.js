import User from './User';

const UseList = ({ users, updateUser, deleteUser }) => (
  <>
    <h1>All Users</h1>
    { users.map( s =>
      <User
        key={u.id}
        // id={s.id} title={s.title} email={s.email}
        {...s}
        updateUser={updateUser}
        deleteUser={deleteUser}
      />
    )}
  </>
)

export default UserList;