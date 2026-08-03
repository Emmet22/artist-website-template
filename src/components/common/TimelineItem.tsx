import type {TimelineStep} from "../../types/TimelineStep";
import styles from "./TimelineItem.module.css";

import { useEffect, useRef, useState } from "react";

interface TimelineItemProps {
  step: TimelineStep;
  index: number;
}

function TimelineItem({step, index}: TimelineItemProps) {
    const isLeft = index % 2 === 0;
  
    // for animations
    const itemRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2,
            }
        );  

        const currentItem = itemRef.current;

        if (currentItem) {
            observer.observe(currentItem);
        }

        return () => {
            if (currentItem) {
                observer.unobserve(currentItem);
            }
        };
    }, []);

    return (
        <div 
        ref={itemRef}
        className={`
            ${styles.item} 
            ${isLeft ? styles.left : styles.right}
            ${isVisible ? styles.show : ""}
        `}
        >
            {
                isLeft && (            
                    <div className={styles.card}>
                        <h4 className={styles.cardTitle}>{step.title}</h4>
                        <p className={styles.cardDescription}>{step.description}</p>
                    </div>
                )
            }

            <div className={styles.number}>
                    {step.id}
            </div>

            {
                !isLeft && (
                    <div className={styles.card}>
                        <h4 className={styles.cardTitle}>{step.title}</h4>
                        <p className={styles.cardDescription}>{step.description}</p>
                    </div>
                )
            }
            
        </div>
    
  );
}

export default TimelineItem;

