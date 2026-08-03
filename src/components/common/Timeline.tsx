import type {TimelineStep} from "../../types/TimelineStep";
import { useState } from "react";
import styles from "./Timeline.module.css";

interface TimelineProps {
    steps: TimelineStep[];
}

function Timeline({ steps }: TimelineProps) {

    const [selectedStep, setSelectedStep] = useState(0);

    return (
        <div className={styles.timeline}>

            <div className={styles.steps}>
                {
                    steps.map((step, index) => (
                        <div
                            key={index}
                            className={
                                `${styles.step}
                                ${selectedStep === index ? styles.active : ""}`
                            }   
                            onClick={() => setSelectedStep(index)} 
                        >

                            <div className={styles.circle}>
                                {step.stepNumber}
                            </div>
                            <h4 className={styles.stepTitle}>{step.title}</h4>
                        </div>
                    ))
                }
            </div>

            <div className={styles.description}>
                <h3>
                    {steps[selectedStep].title}
                </h3>

                <p>
                    {steps[selectedStep].description}
                </p>
            </div>

        </div>
    );
}        

export default Timeline;