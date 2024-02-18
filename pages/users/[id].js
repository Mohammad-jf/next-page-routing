import { useRouter } from 'next/router';
import React from 'react';

function User() {
  const router = useRouter();
  const id = router.query.id;
  return <h1>user #{id}</h1>;
}

export default User;
