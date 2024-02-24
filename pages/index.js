import { Inter } from 'next/font/google';
import Link from 'next/link';
import { useRouter } from 'next/router';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();

  const clickHandler = (e) => {
    //logging process
    router.push('/students');
  };

  return (
    <>
      <h1>hello world</h1>
      <ul>
        <li>
          <Link href='/courses'>go to courses</Link>
        </li>
        <li>
          <Link href='/users'>go to users</Link>
        </li>
        <li>
          <button onClick={clickHandler}>LogIn</button>
        </li>
      </ul>
    </>
  );
}
