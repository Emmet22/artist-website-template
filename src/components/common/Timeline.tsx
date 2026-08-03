import type {TimelineStep} from "../../types/TimelineStep";
import TimelineItem from "./TimelineItem";
import styles from "./Timeline.module.css";

interface TimelineProps {
    steps: TimelineStep[];
}

function Timeline({ steps }: TimelineProps) {

    return (
        <div className={styles.timeline}>
            {
                steps.map((step, index) => (
                    <TimelineItem
                        key={step.id}
                        step={step}
                        index={index}
                    />
                ))
            }
        </div>
       
    );
}

export default Timeline;