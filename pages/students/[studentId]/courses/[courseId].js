import { useRouter } from 'next/router';
import React from 'react';

function CourseId() {
  const router = useRouter();
  const id = router.query.courseId;
  return <h1>CourseId {id}</h1>;
}

export default CourseId;
