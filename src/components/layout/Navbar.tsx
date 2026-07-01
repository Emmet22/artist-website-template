import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <p>LOGO</p>
      </div>
      <ul className={styles.navLinks}>
        <li><a href="#">HOME</a></li>
        <li><a href="#">GALLERY</a></li>
        <li><a href="#">ABOUT</a></li>
        <li><a href="#">CONTACT</a></li>
      </ul>
      </nav>
  );
}

export default Navbar;