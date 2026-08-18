import { Link } from 'react-router-dom';
import {useState} from 'react';

import styles from './Navbar.module.css';

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <p>LOGO</p>
      </div>

      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        ☰
      </button>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/gallery">GALLERY</Link></li>
        <li><Link to="/commission">CREATE YOUR PIECE</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
      </nav>
  );
}

export default Navbar;