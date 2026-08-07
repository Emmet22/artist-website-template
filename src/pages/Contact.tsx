// import components
import Section from "../components/common/Section";
import Card from "../components/common/Card";

// import styles
import styles from "./Contact.module.css";

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
                        <h4>Start a Commission</h4>
                        <p>
                            Create a personalised artwork designed around your vision.
                        </p>
                        <button className="btn">Start enquiry</button>
                    </Card>

                    <Card>
                        <h4>Instagram</h4>
                        <p>Follow the studio process and see new releases.</p>
                        <button className="btn">Follow</button>
                    </Card>

                    <Card>
                        <h4>Email</h4>
                        <p>
                            Have a question? Send us a direct message.
                        </p>

                        <button className="btn">
                            Email us
                        </button>
                    </Card>
                    <Card>
                        <h4>Newsletter</h4>
                        <p>
                            Be the first to hear about new collections.
                        </p>

                        <button className="btn">
                            Sign up
                        </button>
                    </Card>
                </div>
            </Section>

            <Section>
                <div>
                    <h3>Contact form</h3>
                    <p>CURRENT WORK IN PROGRESS, also ensure rate limiting</p>
                </div>
                <div>
                    <form className={styles.contactForm}>
                        <label>Name:</label>
                        <input type="text" placeholder="name"/>

                        <label>Email:</label>
                        <input type="text" placeholder="email"/>
                        
                        <label>Subject:</label>
                        <input type="text" placeholder="subject"/>
                        
                        <label>Message:</label>
                        <textarea placeholder="message"/>
                        <button type="submit" className="btn">Submit</button>    
                    </form>
                    
                </div>
            </Section>

            <Section>
                <div>
                    <h3>Join our newsletter</h3>
                    <p>Be the first to hear about new avaliability, collections and more</p>
                    
                    <button className="btn">Join email list</button>
                </div>
            </Section>

            <Section>
                <div>
                    <h3>Commisson information</h3>
                    <ul>
                        <li>Explain commision process</li>
                        <li>Prevent people from being daunted by commision enquirys</li>
                        <li>reduce friction from wanting a piece and not wanting to enquir a commision</li>
                    </ul>
                </div>
            </Section>

            <Section>
                <h3>Contact FAQs</h3>
                
            </Section>
        </main> 
    );
}

export default Contact;