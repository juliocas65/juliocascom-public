import React, { useEffect, useState } from 'react'

export const Users = () => {
  const [ users, setUsers] = useState([]);

  const chargeUsers = async () => {
    const result = await fetch("https://reqres.in/api/users?page=2");
    const { data } = await result.json();
    setUsers(data);
  }

  useEffect(() => {
    chargeUsers();
  }, []);

  return (
    <div>
      <ol>
        {
          users.map(user => {
            return (
              <li key={user.id}>
                {user.first_name}
              </li>
            )
          })
        }
      </ol>
    </div>
  )
}
