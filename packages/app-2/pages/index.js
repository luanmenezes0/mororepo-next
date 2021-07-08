import { useEffect, useState } from 'react';
import Header from '../../app-1/components/Header';
import Navbar from '../../app-1/components/Navbar';

export default function Home() {
  const [valueFromLocalStorage, setValueFromLocalStorage] = useState();

  useEffect(() => {
    const value = window.localStorage.getItem('name');
    setValueFromLocalStorage(value);
  }, []);

  return (
    <>
      <Header />
      <Navbar />
      <div>
        <h2>Value from Local Storage</h2>
        <p>{valueFromLocalStorage}</p>
      </div>
    </>
  );
}
