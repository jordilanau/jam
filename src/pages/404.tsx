import styles from '@/styles/404.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function NotFound() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 4000);
  }, [router]);

  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <h2>Oops! That page cannot be found :(</h2>
      <p>
        Redirecting to <Link href='/'>Homepage</Link> for more marmite goodness...
      </p>
    </div>
  );
}
