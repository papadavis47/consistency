import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main>
      <div>
        <h1 className='text-3xl underline font-bold text-red-400'>consistency</h1>
      </div>
    </main>
  );
}
