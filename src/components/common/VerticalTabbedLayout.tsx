import type { TabItem } from "../../types/TabItem";
import styles from "./VerticalTabbedLayout.module.css";
import { useState } from "react";

interface VerticalTabLayoutProps {
    items: TabItem[];
}

function VerticalTabLayout({ items }: VerticalTabLayoutProps) {

    const [activeId, setActiveId] = useState(items[0]?.id ?? null);

    const activeItem = items.find(item => item.id === activeId);

    return (
        <div className={styles.layout}>

            {/* LEFT SIDE */}
            <div className={styles.content}>

                <div className={styles.tabs}>
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

                            <span className={styles.title}>
                                {item.title}
                            </span>
                        </button>
                    ))}
                </div>

                {activeItem?.description && (
                    <p className={styles.description}>
                        {activeItem.description}
                    </p>
                )}

            </div>

            {/* RIGHT SIDE */}
            {activeItem && (
                <div className={styles.image}>
                    <img
                        src={activeItem.imageUrl}
                        alt={activeItem.imageAlt}
                    />
                </div>
            )}

        </div>
    );
}

export default VerticalTabLayout;