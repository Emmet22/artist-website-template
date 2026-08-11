import { useState } from "react";
import type { TabItem } from "../../types/TabItem";
import styles from "./Tabs.module.css";

interface TabProps {
    items: TabItem[];
}

function Tabs({ items }: TabProps) {

    // store id of current tab
    const [activeId, setActiveId] = useState(items[0]?.id ?? null);

    // find current selected item
    const activeItem = items.find(item => item.id === activeId);

    return (
        <div className={styles.tabs}>

            {/* TAB BUTTONS */}
            <div className={styles.tabList}>
                {items.map(item => (
                    <button 
                        key={item.id}
                        type="button"
                        className={`${styles.tab} ${
                            activeId === item.id ? styles.active : ""
                        }`}
                        onClick={() => setActiveId(item.id)}
                    >
                        <span className={styles.number}>
                            {String(item.id).padStart(2, "0")}
                        </span>
                        <span>
                            {item.title}
                        </span>
                    </button>
                ))}
            </div>
            
            {/* TAB CONTENT */}
            {
                activeItem && (
                    <div className={styles.tabContent}>
                        <div>
                            <img 
                                className={styles.tabImage}
                                src={activeItem.imageUrl}
                                alt={activeItem.imageAlt}
                            />
                        </div>
                        <div className={styles.tabText}>
                            <div className={styles.tabTitle}>
                                <h3>{activeItem.title}</h3>
                            </div>
                            <div className={styles.tabDescription}>
                                <p>{activeItem.description}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Tabs;