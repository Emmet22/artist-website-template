import styles from "./TestimonialCard.module.css";
import type { Testimonial } from "../../types/Testimonial";

function TestimonialCard({rating, quote, name}: Testimonial) {
    return (
        <div className={styles.testimonialCard}> 
            <div className={styles.rating}>
                {"★".repeat(rating)}
            </div>

            <div className={styles.quote}>
                "{quote}"
            </div>

            <p className={styles.name}>
                - {name}
            </p>
        </div>
    );
}

export default TestimonialCard;
    