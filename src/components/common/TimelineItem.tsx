import type {TimelineStep} from "../../types/TimelineStep";
import styles from "./TimelineItem.module.css";

interface TimelineItemProps {
  step: TimelineStep;
  index: number;
}

function TimelineItem({step, index}: TimelineItemProps) {
    const isLeft = index % 2 === 0;
  
    return (
        <div className={`${styles.item} ${
            isLeft ? styles.left : styles.right
        }`}
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

