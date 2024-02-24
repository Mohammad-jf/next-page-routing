import { Inter } from 'next/font/google';
import Link from 'next/link';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <h1>hello world</h1>
      <ul>
        <li><Link href='/courses'>go to courses</Link></li>
        <li><Link href='/users'>go to users</Link></li>
      </ul>
    </>
  )
}
