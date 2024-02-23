import React from 'react';
import { useRouter } from 'next/router';

function Article() {
  const router = useRouter();
  const slugs = router.query.slugs || [];

  if (slugs.length > 1) {
    return (
      <h3>
        this article was written by {slugs[0]}at {slugs[1]}
      </h3>
    );
  }
  return <h1>Article</h1>;
}

export default Article;
