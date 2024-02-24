import Link from 'next/link';
import React from 'react';

function Users() {
  const users = [
    {
      id: 1,
      name: 'user1',
    },
    {
      id: 2,
      name: 'user2',
    },
    {
      id: 3,
      name: 'user3',
    },
    {
      id: 4,
      name: 'user4',
    },
  ];

  return (
    <>
      <div>Users</div>
      {users.map((user) => {
        return (
          <h1 key={user.id}>
            <Link href={`/users/${user.id}`}>{user.name}</Link>
          </h1>
        );
      })}
    </>
  );
}

export default Users;
