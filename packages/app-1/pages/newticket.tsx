import { useRouter } from 'next/dist/client/router';
import { FormEvent, useRef } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

export default function About() {
  const router = useRouter();

  console.log(router.query);

  function send(ev: FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const form = ev.target as HTMLFormElement;
    const formData = new FormData(form);

    const url = new URL(`/api/newticket`, window.origin);
    url.search = new URLSearchParams(formData).toString();

    window.fetch(url.toString());
  }

  return (
    <>
      <Header />
      <Navbar />
      <main>
        {router.query.id && <h1>Ticket {router.query.id}</h1>}
        <form onSubmit={send}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" />
          <input type="submit" value="SEND" />
        </form>
      </main>
      <Footer />
    </>
  );
}
