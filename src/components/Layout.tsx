import Link from 'next/link';
import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className='layout'>
      <header>
        <Link href='/'>
          <h1>
            <span>Just Add</span>
            <span>Marmite</span>
          </h1>
          <h2>Spread The Joy</h2>
        </Link>
      </header>

      <div className='page-content'>{children}</div>

      <footer>
        <p>Copyright 2021 Just Add Marmite :)</p>
      </footer>
    </div>
  );
}
