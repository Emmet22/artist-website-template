import styles from "./NewsletterSignup.module.css";
import Card from "./Card";

function NewsletterSignup() {

    return (
        <div className={styles.newsletterSignupContainer}>
            <h3>STAY CONNECTED - Join our email list</h3>
            <p>
                Receive updates about new collections, 
                exclusive releases and behind-the-scenes studio stories.
            </p>

            <div className={styles.cardContainter}>
                <Card>
                    <h4>Exclusive Updates</h4>
                    <p>Receive behind-the-scenes studio updates and stories.</p>
                </Card>
                <Card>
                    <h4>New Collections</h4>
                    <p>Be the first to discover new artwork releases before they become widely available.</p>
                </Card>
                <Card>
                    <h4>Commission News</h4>
                    <p>Stay informed about availability and commission openings.</p>
                </Card>
            </div>


            <form className={styles.newsletterForm}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    required
                />

                <button className="btn">Join mailing list</button>
            </form>
            
        </div>
    );

}

export default NewsletterSignup;