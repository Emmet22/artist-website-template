import { useState }from 'react';
import styles from './ContactForm.module.css';

function ContactForm() {

    /*
        formType is the current value
        setFormType is the function to update the value
        general is the inital value    
    */
    const [formType, setFormType] = useState<"general" | "commission">("general");

    return (
        <>
            <div className={styles.formSelector}>
                <button
                    type="button"
                    className={formType === "general" ? styles.active : ""}
                    onClick={() => setFormType("general")}
                >
                    General Enquiry
                </button>
                <button
                    type="button"
                    className={formType === "commission" ? styles.active : ""}
                    onClick={() => setFormType("commission")}
                >
                    Commission Enquiry
                </button>
            </div>

            {
                formType === "general" && (
                    <div className={styles.formSection}>
                        <h4>General Enquiry</h4>
                        <p>
                            Have a question about an artwork, the studio, or the collection?
                            Send us a message and we will get back to you.
                        </p>

                        <form className={styles.form}>

                            <div className={styles.formGroup}>
                                <label htmlFor="general-name">Name</label>
                                <input
                                    id="general-name"
                                    type="text"
                                    placeholder="Your name"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="general-email">Email</label>
                                <input
                                    id="general-email"
                                    type="email"
                                    placeholder="Your email"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="general-message">Message</label>
                                <textarea
                                    id="general-message"
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
                )
            }

            {
                formType === "commission" && (
                    <div className={styles.formSection}>
                    <h4>Commission Enquiry</h4>
                    <p>
                        Have an idea for a personalised artwork?
                        Tell us a little about what you have in mind.
                    </p>

                    <form className={styles.form}>

                        <div className={styles.formGroup}>
                            <label htmlFor="commission-name">Name</label>
                            <input
                                id="commission-name"
                                type="text"
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="commission-email">Email</label>
                            <input
                                id="commission-email"
                                type="email"
                                placeholder="Your email"
                                required
                            />
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="size">Size</label>
                            <select id="size" required>
                                <option value="">Select a size</option>
                                <option value="small">Small</option>
                                <option value="medium">Medium</option>
                                <option value="large">Large</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="colourPalette">Colour palette</label>
                            <select id="colourPalette" required>
                                <option value="">Select a colour palette</option>
                                <option value="warm">Warm</option>
                                <option value="cool">Cool</option>
                                <option value="neutral">Neutral</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="frame">Frame</label>
                            <select id="frame" required>
                                <option value="">Select a frame</option>
                                <option value="white">White</option>
                                <option value="black">Black</option>
                                <option value="none">None</option>
                            </select>
                        </div>

                        <div className={styles.formGroup}>
                            <label htmlFor="inspiration">Inspiration</label>
                            <textarea
                                id="inspiration"
                                rows={6}
                                placeholder="Tell us about your vision for the piece..."
                                required
                            />
                        </div>

                        <button type="submit" className="btn">
                            Send commission enquiry
                        </button>

                    </form>
                </div>
            )}
    </>
    );
}

export default ContactForm;