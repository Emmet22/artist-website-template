import styles from './Footer.module.css';

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.brand}>
                <div className={styles.logo}>LOGO</div>
                <h3>Original Art Each Unique</h3>
            </div>

            <div className={styles.footerContent}>
                

                <div className={styles.mediaLinks}>
                    <ul>
                        <li><a href="#">INSTAGRAM</a></li>
                        <li><a href="#">FACEBOOK</a></li>
                        <li><a href="#">TIKTOK</a></li>
                        <li><a href="#">PINTREST</a></li>
                    </ul>
                </div>

                <div className={styles.footerLinks}>
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">GALLERY</a></li>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">CONTACT</a></li>
                    </ul>
                </div>
            </div>
            <p className={styles.copyright}>Copyright Emmet Casey 2026</p>
        </div>
    );
}

export default Footer;