import Image from 'next/image';

const Footer = () => (
  <footer>
    <p>Trilogo</p>
    <Image src="/static/nextjs.png" alt="Next.js logo" width={200} height={160} />
  </footer>
);

export default Footer;
