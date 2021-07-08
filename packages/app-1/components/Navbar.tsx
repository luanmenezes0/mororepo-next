import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';

import styles from './Navbar.module.css';

export default function Navbar() {
  const { basePath } = useRouter();

  const isSubApp = basePath === '/blog';

  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li>{isSubApp ? <a href="/">Home</a> : <Link href="/">Home</Link>}</li>
        <li>
          <Link href="/newticket">
            <a>New Ticket</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}
