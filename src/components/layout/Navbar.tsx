import { Link } from 'react-router-dom';

import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <p>LOGO</p>
      </div>
      <ul className={styles.navLinks}>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/gallery">GALLERY</Link></li>
        <li><Link to="/about">ABOUT</Link></li>
        <li><Link to="/contact">CONTACT</Link></li>
      </ul>
      </nav>
  );
}

export default Navbar;