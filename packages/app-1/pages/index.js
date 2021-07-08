import { useRouter } from 'next/dist/client/router';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Header = dynamic(import('../components/Header'));

export default function Home() {
  const [name, setName] = useState('');

  const router = useRouter();

  const save = () => {
    window.localStorage.setItem('name', name);
    console.log(window.location.href, name);
    setName('');
  };

  return (
    <>
      <Header />
      <Navbar />
      <main>
        <div style={{ display: 'flex' }}>
          <input value={name} onChange={(ev) => setName(ev.target.value)} type="text" />
          <button onClick={save}>Save to localStorage</button>
        </div>

        <button
          onClick={() =>
            router.push({
              pathname: '/newticket',
              query: { id: '21' },
            })
          }
        >
          go to ticket 21
        </button>
      </main>
      <Footer />
    </>
  );
}
