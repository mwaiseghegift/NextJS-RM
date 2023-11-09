import React from 'react'

// we define the shape of the user object
interface User {
  id: number
  name: string
}

const UsersPage = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users', 
  {
    next: {revalidate:10} // this is the revalidate property that we can use to set the revalidation time
  })
  const users: User[] = await response.json()
  return (
    <>
      <h1>Users</h1>
      <p>{ new Date().toLocaleTimeString() }</p>
      <ul>
        {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>
    </>
  )
}

export default UsersPage