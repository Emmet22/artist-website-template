// import components
import Section from "../components/common/Section";

// import styles
import styles from "./Contact.module.css";

function Contact() {
    return (
        <main>
            <div className={styles.contactHero}>
                <h1>HAVE A QUESTION?</h1>
                <p>
                    Whether your interested in an original piece,
                    a commision, or want to <strong>get in touch</strong>, we would love
                    to hear from you!
                    <br/>
                    Choose one of our various <strong>contact methods</strong> 
                    and get in touch
                </p>
            </div>

            <Section>
                <div>
                    <h3>Contact methods</h3>
                    <ul>
                        <li>Email: ...</li>
                        <li>Instagram: </li>
                        <li>Facebook:</li>
                        <li>Contact form</li>
                    </ul>
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