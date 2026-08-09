import styles from './ContactForm.module.css';

function ContactForm() {
    return (
        <div>
             <form className={styles.form}>
            
            <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="subject">Subject</label>
                <input
                    id="subject"
                    type="text"
                    placeholder="What can we help with?"
                    required
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    placeholder="Tell us a little about your enquiry..."
                    rows={6}
                    required
                />
            </div>

            <button type="submit" className="btn">
                Send enquiry
            </button>

        </form>
        </div>
    );
}

export default ContactForm;