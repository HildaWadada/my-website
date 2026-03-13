import { GitHub, Linkedin, Mail } from 'react-feather';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} Hilda Wadada · AI Engineer &amp; Web Developer</p>
        </div>
      </div>
    </footer>
  );
}
