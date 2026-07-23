/*
    This component is responible for rendering all the 
    customisation options for an ArtPiece in the 
    commission builder.

    Options include 
    - size.
    - matertial.
    - frame.
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

function CustomisationPanel({sizes, frames, materials}: CustomisationPanelProps) {
    return (
        <div className={styles.panel}>
            <h2>Customisatise your piece</h2>

            <div className={styles.option}>
                <label>Size</label>
                <select>
                    {
                        sizes.map(size => (
                            <option
                                key={size.id} 
                                value={size.id} 
                            >
                                {size.name}
                            </option>
                        ))
                    }
                </select>
            </div>

            <div className={styles.option}> 
                <label>Material</label>
                <select>
                    {
                        materials.map(material => (
                            <option
                                key={material.id} 
                                value={material.id}
                            >
                                {material.name}
                            </option>
                        ))
                    }
                </select>
            </div>
            
            <div className={styles.option}>
                <label>Frame</label>
                <select>
                    {
                    frames.map(frame => (
                        <option
                            key={frame.id}
                            value={frame.id}
                        >
                            {frame.name}
                        </option>
                    ))
                    }
                </select>
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
