// import components
import Section from "../components/common/Section";
import Card from "../components/common/Card";
import ContactForm from "../components/common/ContactForm";
import Timeline from "../components/common/Timeline";

// import styles
import styles from "./Contact.module.css";
import NewsletterSignup from "../components/common/NewsletterSignup";

// import data
import { commissionProcessSteps } from "../data/CommissionProcessSteps";

function Contact() {
    return (
        <main>
            <div className={styles.contactHero}>
                <h1>lets create something unique</h1>
                <p>
                    Whether you are interested in an original artwork,
                    a personalised commission, or simply want to learn more,
                    we would love to hear from you.
                </p>
            </div>

            <Section>
                <h3>Contact methods</h3>

                <div className={styles.contactMethods}>

                    <Card>
                        <h4 className={styles.contactCardTitle}>Start a Commission</h4>
                        <p className={styles.contactCardDescription}>
                            Create a personalised artwork designed around your vision.
                        </p>
                        <button className="btn">Start enquiry</button>
                    </Card>

                    <Card>
                        <h4 className={styles.contactCardTitle}>Instagram</h4>
                        <p className={styles.contactCardDescription}>Follow the studio process and see new releases.</p>
                        <button className="btn">Follow</button>
                    </Card>

                    <Card>
                        <h4 className={styles.contactCardTitle}>Email</h4>
                        <p className={styles.contactCardDescription}>
                            Have a question? Send us a direct message.
                        </p>

                        <button className="btn">
                            Email us
                        </button>
                    </Card>
                    <Card>
                        <h4 className={styles.contactCardTitle}>Newsletter</h4>
                        <p className={styles.contactCardDescription}>
                            Be the first to hear about new collections.
                        </p>

                        <button className="btn">
                            Sign up
                        </button>
                    </Card>
                </div>
            </Section>

            <Section>
                <h3>Send us an enquiry</h3>

                <p>
                    Have a question about an artwork or interested in a commission?
                    Send us a message and we will get back to you.
                </p>

                <ContactForm />
            </Section>

            <Section>
                <NewsletterSignup />
            </Section>

            <Section>
                <h3>How commissions work</h3>
                <p>
                    From the initial idea to the finished artwork, 
                    we make the commission process simple and personal.
                </p>

                <Timeline steps={commissionProcessSteps} />
            </Section>

            <Section>
                <h3>Contact FAQs</h3>
                
            </Section>
        </main> 
    );
}

export default Contact;