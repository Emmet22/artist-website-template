import type { ReactNode } from "react";
import styles from "./Section.module.css";

interface SectionProps {
    children: ReactNode;
}

function Section ({children}: SectionProps) {
    return (
        <div className={styles.section}>
            {children}
        </div>
    );
}

export default Section;