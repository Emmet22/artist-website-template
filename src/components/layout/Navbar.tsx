import { Link } from 'react-router-dom';
import {useState} from 'react';

import styles from './Navbar.module.css';

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  }

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
        <li><Link to="/" onClick={closeMenu}>HOME</Link></li>
        <li><Link to="/gallery" onClick={closeMenu}>GALLERY</Link></li>
        <li><Link to="/commission" onClick={closeMenu}>CREATE YOUR PIECE</Link></li>
        <li><Link to="/about" onClick={closeMenu}>ABOUT</Link></li>
        <li><Link to="/contact" onClick={closeMenu}>CONTACT</Link></li>
      </ul>
      </nav>
  );
}

export default Navbar;