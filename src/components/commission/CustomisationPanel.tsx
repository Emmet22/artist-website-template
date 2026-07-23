/*
    This component is responible for rendering all the 
    customisation options for an ArtPiece in the 
    commission builder.

    Options include 
    - size.
    - matertial.
    - frame.

    N.B. the selected values are controled by the 
    CommissionBuilder page.
*/

// import styles
import styles from './CustomisationPanel.module.css';

// import types
import type { SizeOption } from '../../types/SizeOption';
import type { FrameOption } from '../../types/FrameOption';
import type { MaterialOption } from '../../types/MaterialOption';

// props
interface CustomisationPanelProps {
    sizes: SizeOption[];
    frames: FrameOption[];
    materials: MaterialOption[];
}

// function for fixing the price modifier 
function formatPriceModifier(priceModifier: number) { 
    if (priceModifier == 0) {
        return "Included";
    }
    if (priceModifier > 0) {
        return `+€${priceModifier}`;
    }
    return `-€${Math.abs(priceModifier)}`;
}

function CustomisationPanel({sizes, frames, materials}: CustomisationPanelProps) {
    return (
        <div className={styles.panel}>
            
            <h2>Customise your piece</h2>
           
            {/* size options */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>
                    <h3>Select Size</h3>
                </div>

                <div className={styles.options}>
                    {
                        sizes.map(size => (
                            <label
                                key={size.id}
                                className={styles.optionCard}
                            >
                                <input 
                                    type="radio"
                                    name="size"
                                    value={size.id}
                                />

                                <div>
                                    <h4>
                                        {size.name}
                                    </h4>
                                    
                                    <p>
                                        {size.width}cm x {size.height}cm
                                    </p>

                                    <span>
                                        {formatPriceModifier(size.priceModifier)}
                                    </span>
                                </div>

                            </label>
                        ))
                    }
                </div>
            </div>

            {/* material options */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>
                    <h3>Select Material</h3>
                </div>

                <div className={styles.options}>
                    {
                        materials.map(material => (
                            <label 
                                key={material.id}
                                className={styles.optionCard}
                            >

                                <input 
                                    type="radio"
                                    name="material"
                                    value={material.id}
                                />

                                <div>
                                    <h4>
                                        {material.name}
                                    </h4>
                                    <span>
                                        {formatPriceModifier(material.priceModifier)}
                                    </span>
                                </div>

                            </label>
                        ))
                    }
                </div>
            </div>
            
            {/* frame options */}
            <div className={styles.section}>
                <div className={styles.sectionTitle}>
                    <h3>Select Frame</h3>
                </div>
                <div className={styles.options}>
                    {
                        frames.map(frame => (
                            <label 
                                key={frame.id}
                                className={styles.optionCard}
                            >
                                <input
                                    type="radio"
                                    name="frame"
                                    value={frame.id}
                                />
                                <div>
                                    <h4>
                                        {frame.name}   
                                    </h4>
                                    <p>
                                        {frame.color}
                                    </p>
                                    <span>
                                        {formatPriceModifier(frame.priceModifier)}
                                    </span>
                                </div>
                            </label>
                        ))
                    }
                </div>
            </div>  

            <div className={styles.summary}>
                <h3>Estimated Price</h3>
                <p>€XXX</p>
                <button className="btn">
                    PURCHASE
                </button>
            </div>
        </div>
    );
}

export default CustomisationPanel;
