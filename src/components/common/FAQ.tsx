import type {FAQItem} from "../../types/FAQItem";
import styles from "./FAQ.module.css";
import {useState} from "react";

interface FAQProps {
  items: FAQItem[];
}

function FAQ({ items }: FAQProps) {

    const [openId, setOpenId] = useState<number | null>(null);

    function toggleFAQ(id: number) {
        setOpenId(openId === id ? null : id);
    }

    return (
        <div className={styles.faq}>
            {items.map((item) => (
                <div key={item.id} className={styles.faqItem}>

                    <button
                        type="button"
                        className={styles.question}
                        onClick={() => toggleFAQ(item.id)}
                        aria-expanded={openId === item.id}
                    >
                        <span>{item.question}</span>

                        <span className={styles.icon}>
                            {openId === item.id ? "−" : "+"}
                        </span>
                    </button>

                    {openId === item.id && (
                        <div className={styles.answer}>
                            <p>{item.answer}</p>
                        </div>
                    )}

                </div>
            ))}
        </div>
    );
}

export default FAQ;